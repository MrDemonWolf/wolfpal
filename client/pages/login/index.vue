<template>
  <div class="flex flex-col justify-center py-12 h-80 sm:px-6 lg:px-8">
    <div
      v-if="!twoFactorTokenRequested"
      class="sm:mx-auto sm:w-full sm:max-w-md"
    >
      <h1
        class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900 dark:text-white"
      >
        Login in to your account
      </h1>
      <p
        v-if="$config.registration"
        class="mt-2 text-sm leading-5 text-center text-gray-600 max-w dark:text-gray-200"
      >
        Or
        <nuxt-link
          class="font-medium transition duration-150 ease-in-out text-primary-600 hover:text-primary-500 focus:outline-none focus:underline dark:text-primary-300"
          to="/register"
        >
          create a account
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Alert v-if="error" type="danger" :message="error" class="mb-4" />
      <Alert v-if="success" type="success" :message="success" class="mb-4" />
      <div
        class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10 dark:bg-gray-200"
      >
        <form v-if="!twoFactorTokenRequested" @submit.prevent="userLogin">
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
                v-model="login.email"
                aria-label="Email address"
                placeholder="example@example.com"
                name="email"
                type="email"
                :class="{ 'border-red-500': login.errors.email || error }"
                class="block w-full px-3 py-2 mt-1 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                novalidate
              />
            </div>
            <span v-if="login.errors.email" class="text-red-500">{{
              login.errors.email
            }}</span>
          </div>
          <div class="mt-6">
            <label
              for="password"
              class="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-800"
            >
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                v-model="login.password"
                aria-label="Password"
                placeholder="****************"
                name="password"
                type="password"
                :class="{ 'border-red-500': login.errors.password || error }"
                class="block w-full px-3 py-2 mt-1 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                novalidate
              />
            </div>
            <span v-if="login.errors.password" class="text-red-500">{{
              login.errors.password
            }}</span>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700"
              >
                Sign in
              </button>
            </span>
          </div>
        </form>
        <form v-else @submit.prevent="userLoginWithTwoFactor">
          <div>
            <label
              for="twoFactorCode"
              class="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-800"
            >
              Enter your 2FA verification token
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="twoFactorCode"
                v-model="loginTwoFactor.code"
                aria-label="Two Factor Code"
                placeholder="123456"
                name="twoFactorCode"
                type="text"
                :class="{
                  'border-red-500': loginTwoFactor.errors.code || error,
                }"
                class="block w-full px-3 py-2 mt-1 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                novalidate
              />
            </div>
            <span v-if="loginTwoFactor.errors.code" class="text-red-500">{{
              loginTwoFactor.errors.code
            }}</span>
          </div>
          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700"
              >
                Sign in
              </button>
            </span>
          </div>
        </form>
        <div class="flex items-center justify-between mt-6">
          <div class="text-sm leading-5">
            <nuxt-link
              class="font-medium transition duration-150 ease-in-out text-primary-600 hover:text-primary-500 focus:outline-none focus:underline"
              to="/forgot-password"
            >
              Forgot your password?
            </nuxt-link>
          </div>
          <div class="text-sm leading-5">
            <nuxt-link
              class="font-medium transition duration-150 ease-in-out text-primary-600 hover:text-primary-500 focus:outline-none focus:underline"
              to="/activate-account"
            >
              Resend account activation?
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
  components: { Alert },
  middleware: ['alreadyAuthenticated'],
  data() {
    return {
      login: {
        email: '',
        password: '',
        errors: { email: null, password: null },
      },
      loginTwoFactor: {
        code: null,
        errors: { code: null },
      },
      error: null,
      success: null,
      twoFactorTokenRequested: false,
    }
  },
  methods: {
    async userLogin() {
      try {
        const res = await this.$axios.$post('/api/auth/login', {
          email: this.login.email,
          password: this.login.password,
        })
        if (!res.twoFactor) {
          return this.loginNo2FA(res.access_token, res.refresh_token)
        } else {
          this.$store.commit('login/SET_TWO_FACTOR_TOKEN', res.token)
          this.twoFactorTokenRequested = true
        }
      } catch (e) {
        if (this.success) {
          this.success = null
        }
        if (e.response.data.errors) {
          return (this.login.errors = e.response.data.errors)
        }
        this.error = e.response.data.error
      }
    },
    async loginNo2FA(accessToken, refreshToken) {
      await this.$auth.setUserToken(accessToken, refreshToken)
    },
    async userLoginWithTwoFactor() {
      try {
        const twoFactor = await this.$axios.$post('/api/auth/two-factor', {
          code: this.loginTwoFactor.code,
          token: this.$store.state.login.twoFactorToken,
        })
        await this.$auth.setUserToken(
          twoFactor.access_token,
          twoFactor.refresh_token
        )
      } catch (e) {
        if (this.success) {
          this.success = null
        }
        if (e.response.data.errors) {
          return (this.loginTwoFactor.errors = e.response.data.errors)
        }
        this.error = e.response.data.error
      }
    },
  },
}
</script>
