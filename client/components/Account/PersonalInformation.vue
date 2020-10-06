<template>
  <div class="md:grid md:grid-cols-2 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-2">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
      <p class="text-sm leading-5 text-gray-500">
        This information will be displayed publicly so be careful what you
        share.
      </p>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <!-- <label
                  for="first_name"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >First name</label
                >
                <input
                  id="first_name"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="last_name"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Last name</label
                >
                <input
                  id="last_name"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                /> -->
              </div>

              <div class="col-span-6">
                <label
                  for="email_address"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Email address</label
                >
                <input
                  id="email_address"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: this.$auth.user.email,
      newEmail: this.$auth.user.newEmail,
    }
  },
  methods: {
    async changePersonalInformation(e) {
      if (this.email !== this.$auth.user.email) {
        try {
          const response = await this.$axios.post('/api/account/email-change', {
            email: this.email,
          })
          this.newEmail = this.email
          this.email = this.$auth.user.email
          this.$toast.success(response.data.message, {
            position: 'bottom-right',
          })
        } catch (e) {
          this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }
      }
    },
  },
}
</script>
