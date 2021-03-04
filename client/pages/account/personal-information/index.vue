<template>
  <div
    class="container w-full px-2 mx-auto my-0 overflow-auto shadow-md md:px-8 md:my-6 bg-gray-50 lg:w-3/5 dark:bg-gray-200"
  >
    <div class="my-0 sm:my-5">
      <div class="mt-5 md:mt-0">
        <h3 class="text-xl font-bold leading-8 text-gray-900">
          Personal Information
        </h3>
        <p class="text-sm leading-5 text-gray-500">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <div class="mt-6 md:mt-3">
        <form @submit.prevent="changePersonalInformation">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <label
                for="email_address"
                class="block text-sm font-medium leading-5 text-gray-700"
                >Email address</label
              >
              <input
                id="email_address"
                v-model="email"
                class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              />
              <p v-if="newEmail" class="mt-2 text-sm text-primary-500">
                Your new e-mail address {{ newEmail }} has not yet been
                comfirmed.
                <span
                  class="cursor-pointer text-primary-400 hover:text-primary-600"
                  @click="userResendEmailChange"
                  >Resend confirmation email?</span
                >
              </p>
            </div>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',

  middleware: ['auth'],

  data() {
    return {
      email: this.$auth.user.email,
      newEmail: this.$auth.user.newEmail,
    }
  },

  methods: {
    async changePersonalInformation(e) {
      const email = this.email !== this.$auth.user.email
      const newEmail = this.newEmail !== this.$auth.user.newEmail
      if (email || newEmail) {
        try {
          const res = await this.$axios.$post('/api/account/email-change', {
            email: this.email,
          })
          this.newEmail = this.email
          this.email = this.$auth.user.email
          this.$toast.success(res.message, {
            position: 'bottom-right',
          })
        } catch (e) {
          this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }
      }
    },
    async userResendEmailChange() {
      try {
        const res = await this.$axios.$post('/api/account/email-change/resend')
        this.$toast.success(res.message, {
          position: 'bottom-right',
        })
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          return this.$toast.error(e.response.data.error, {
            position: 'bottom-right',
          })
        }
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
  },
}
</script>