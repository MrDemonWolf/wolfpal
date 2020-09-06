<template>
  <div class="h-80 flex items-center justify-center bg-gray-50 py-12">
    <div class="max-w-md w-full">
      <div class="mb-8">
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-blue-900 dark:text-white"
        >
          Login in to your account
        </h2>
        <p
          class="mt-2 text-center text-sm leading-5 text-gray-600 dark:text-white"
        >
          Or
          <nuxt-link
            class="ont-bold text-indigo-600 dark:text-blue-300 dark-hover:text-blue-400 hover:text-indigo-500 transition ease-in-out duration-150"
            to="/register"
          >
            create a account
          </nuxt-link>
        </p>
      </div>

      <Alert v-if="error" type="danger" :message="error" />
      <Alert v-if="success" type="success" :message="success" />
      <form
        class="bg-gray-100 mt-2 ml-1 mr-1 md:ml-0 md:mr-0 p-12 md:p-16 dark:bg-gray-200 rounded"
        @submit.prevent="userLogin"
      >
        <input
          class="rounded-md shadow-sm mb-1"
          type="hidden"
          name="remember"
          value="true"
        />
        <div class="mb-3">
          <input
            v-model="login.email"
            aria-label="Email address"
            name="email"
            type="email"
            :class="{ 'border-red-500': errors.email }"
            class="inline-block w-full px-3 py-2 rounded border border-gray-500 focus:border-blue-500 bg-white placeholder-gray-600 appearance-nonerounded focus:outline-none"
            placeholder="Email address"
            novalidate
          />
          <span v-if="errors.email" class="text-red-500">{{
            errors.email
          }}</span>
        </div>
        <div class="mb-3">
          <input
            v-model="login.password"
            aria-label="Password"
            name="password"
            type="password"
            :class="{ 'border-red-500': errors.password }"
            class="inline-block w-full px-3 py-2 rounded border border-gray-500 focus:border-blue-500 bg-white placeholder-gray-600 appearance-nonerounded focus:outline-none"
            placeholder="Password"
            novalidate
          />
          <span v-if="errors.password" class="text-red-500">{{
            errors.password
          }}</span>
        </div>

        <div class="mt-2 flex items-center justify-between">
          <a
            href="#"
            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Forgot Password?
          </a>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
      </form>
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
