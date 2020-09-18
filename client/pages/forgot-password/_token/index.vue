<template>
  <div class="h-80 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1
        class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 dark:text-white"
      >
        Reset your password
      </h1>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Alert v-if="error" type="danger" :message="error" class="mb-4" />
      <Alert
        v-if="success"
        type="success"
        :message="`${success} You will be redirected in a few moments....`"
        class="mb-4"
      />
      <div
        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-200"
      >
        <form @submit.prevent="resetPassword">
          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-800"
            >
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                v-model="forgotPassword.password"
                aria-label="Password"
                name="password"
                type="password"
                :class="{ 'border-red-500': errors.password }"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                novalidate
              />
            </div>
            <span v-if="errors.password" class="text-red-500">{{
              errors.password
            }}</span>
          </div>

          <div class="mt-6">
            <label
              for="comfirmPassword"
              class="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-800"
            >
              Comfirm Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="comfirmPassword"
                v-model="forgotPassword.comfirmPassword"
                aria-label="Comfirm Password"
                name="comfirmPassword"
                type="password"
                :class="{ 'border-red-500': errors.comfirmPassword }"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                novalidate
              />
            </div>
            <span v-if="errors.comfirmPassword" class="text-red-500">{{
              errors.comfirmPassword
            }}</span>
          </div>

          <div class="mt-6 flex items-center justify-between">
            <div class="text-sm leading-5">
              <nuxt-link
                class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                to="/forgot-password"
              >
                Resend password reset?
              </nuxt-link>
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Change Password
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
  middleware: ['alreadyAuthenticated'],
  components: { Alert },
  data() {
    return {
      forgotPassword: {
        password: '',
        comfirmPassword: '',
        device: {
          os: '',
          browser: '',
        },
      },
      error: null,
      errors: { password: null, comfirmPassword: null },
      success: null,
    }
  },
  methods: {
    async resetPassword(e) {
      try {
        this.forgotPassword.device = {
          os: this.$ua.os(),
          browser: this.$ua.browser(),
        }
        const response = await this.$axios.post(
          `/api/user/reset-password/${this.$route.params.token}`,
          this.forgotPassword
        )
        this.success = response.data.message
        this.error = null
        this.errors = { password: null, comfirmPassword: null }

        setTimeout(() => this.$router.push({ path: '/login' }), 1000 * 5)
      } catch (e) {
        if (e.response.data.error) {
          this.error = e.response.data.error
          this.errors = { password: null, comfirmPassword: null }
        } else {
          this.errors = e.response.data.errors
          this.error = null
        }
        this.success = null
      }
    },
  },
}
</script>
