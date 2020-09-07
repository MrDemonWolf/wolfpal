<template>
  <div
    class="h-80 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="/img/logos/workflow-mark-on-white.svg"
        alt="Workflow"
      />
      <h2
        class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
      >
        Login in to your account
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
        Or
        <nuxt-link
          class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          to="/register"
        >
          create a account
        </nuxt-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Alert v-if="error" type="danger" :message="error" />
        <Alert v-if="success" type="success" :message="success" />
        <form @submit.prevent="userLogin">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Email
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                v-model="login.email"
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
            <label
              for="password"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                v-model="login.password"
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

          <div class="mt-6 flex items-center justify-between">
            <div class="text-sm leading-5">
              <nuxt-link
                class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                to="/forgot-password"
              >
                Forgot your password?
              </nuxt-link>
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Sign in
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
      error: null,
      errors: { email: null, password: null },
      success: null,
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: this.login,
        })
      } catch (e) {
        if (e.response.data.errors) {
          return (this.errors = e.response.data.errors)
        }
        this.error = e.response.data.error
        if (this.success) {
          this.success = null
        }
      }
    },
  },
}
</script>
