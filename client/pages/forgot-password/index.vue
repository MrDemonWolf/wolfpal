<template>
  <div class="h-80 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Alert v-if="error" type="danger" :message="error" class="mb-4" />
      <Alert v-if="success" type="success" :message="success" class="mb-4" />
      <div
        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-200"
      >
        <h1 class="font-bold font-roboto text-3xl text-primary-500 text-center">
          Forgot Password
        </h1>

        <p class="mt-4 font-montserrat leading-5">
          Please fill in the email address you used to register. You'll receive
          an email with instructions on how to reset your password.
        </p>
        <form class="mt-4" @submit.prevent="userForgotPassword">
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
                Submit
              </button>
            </span>
          </div>
        </form>
        <div class="mt-6 flex items-center justify-between">
          <div class="text-sm leading-5">
            Remembered your password?
            <nuxt-link
              class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              to="/login"
            >
              Sign in here
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Shared/Alert'

export default {
  middleware: ['alreadyAuthenticated'],
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
