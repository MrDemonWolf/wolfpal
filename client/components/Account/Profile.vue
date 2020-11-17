<template>
  <div>
    <div class="mt-5 md:mt-0">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
      <p class="text-sm leading-5 text-gray-500">
        This information will be displayed publicly so be careful what you
        share.
      </p>
    </div>
    <div class="mt-6 md:mt-3">
      <form @submit.prevent="changeProfileInformation">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white sm:p-6">
            <label
              for="username"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Username
            </label>
            <div class="flex mt-1 rounded-md shadow-sm">
              <input
                id="username"
                v-model="changeUsername.username"
                :class="{
                  'border-red-500': changeUsername.errors.username || error,
                }"
                class="flex-1 block w-full transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
              />
            </div>
            <span v-if="changeUsername.errors.username" class="text-red-500">{{
              changeUsername.errors.username
            }}</span>
          </div>
          <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700"
              >
                Save
              </button>
            </span>
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
      changeUsername: {
        username: this.$auth.user.username,
        errors: { username: null },
      },
      error: null,
      success: null,
    }
  },
  methods: {
    async changeProfileInformation(e) {
      const changeUsername =
        this.$auth.user.username !== this.changeUsername.username

      if (changeUsername) {
        try {
          const response = await this.$axios.put(
            '/api/account/change-username',
            { username: this.changeUsername.username }
          )
          await this.$auth.fetchUser()
          this.$toast.success(response.data.message, {
            position: 'bottom-right',
          })
        } catch (e) {
          if (e.response && e.response.data && e.response.data.errors) {
            this.changeUsername.errors = e.response.data.errors
          } else {
            this.$toast.error('Oops.. Something Went Wrong..', {
              position: 'bottom-right',
            })
          }
        }
      }
    },
  },
}
</script>
