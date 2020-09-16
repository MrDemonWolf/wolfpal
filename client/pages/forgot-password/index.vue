<template>
  <div class="h-80 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1
        class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 dark:text-white"
      >
        Forgot your password?
      </h1>
      <p
        class="mt-2 text-center text-sm leading-5 text-gray-600 max-w dark:text-gray-200"
      >
        Or
        <nuxt-link
          class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150 dark:text-primary-300"
          to="/login"
        >
          Login in to your account
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Alert v-if="error" type="danger" :message="error" class="mb-4" />
      <Alert v-if="success" type="success" :message="success" class="mb-4" />
      <div
        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-200"
      >
        <form @submit.prevent="userForgotPassword">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-800"
            >
              Email
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="email"
                v-model="forgotPassword.email"
                aria-label="Email address"
                name="email"
                type="email"
                :class="{ 'border-red-500': errors.email }"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                novalidate
              />
            </div>
            <span v-if="errors.email" class="text-red-500">{{
              errors.email
            }}</span>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Reset Password
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Shared/Alert'

export default {
  components: { Alert },
  data() {
    return {
      forgotPassword: {
        email: '',
      },
      error: null,
      errors: { email: null },
      success: null,
    }
  },
  methods: {
    async userForgotPassword() {
      try {
        const response = await this.$axios.post(
          '/api/user/forgot-password/',
          this.forgotPassword
        )
        this.success = response.data.message
        if (this.error) {
          this.error = null
        }
      } catch (e) {
        this.error = e.response.data.error
        if (this.success) {
          this.success = null
        }
      }
    },
  },
}
</script>
