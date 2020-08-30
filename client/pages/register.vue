<template>
  <div class="h-80 flex items-center justify-center py-12">
    <div class="max-w-md w-full">
      <div class="mb-8">
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-blue-900 dark:text-white"
        >
          Create a account
        </h2>
        <p
          class="mt-2 text-center text-sm leading-5 text-gray-600 dark:text-white"
        >
          Or
          <nuxt-link
            class="font-bold text-indigo-600 dark:text-blue-300 hover:text-indigo-500 transition ease-in-out duration-150"
            to="/register"
          >
            login in to your account
          </nuxt-link>
        </p>
      </div>

      <Alert v-if="error" type="danger" :message="error" />
      <Alert v-if="success" type="success" :message="success" />
      <form
        class="bg-gray-200 mt-2 ml-1 mr-1 md:ml-0 md:mr-0 p-12 md:p-16 dark:bg-gray-200 rounded"
        @submit.prevent="userRegister"
      >
        <div class="mb-3">
          <input
            v-model="username"
            aria-label="Username"
            name="username"
            type="text"
            :class="{ 'border-red-500': errors.username }"
            class="inline-block w-full px-3 py-2 rounded border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-nonerounded focus:outline-none"
            placeholder="Usernames"
            novalidate
          />
          <span v-if="errors.username" class="text-red-500">{{
            errors.username
          }}</span>
        </div>
        <div class="mb-3">
          <input
            v-model="email"
            aria-label="Email address"
            name="email"
            type="email"
            :class="{ 'border-red-500': errors.email }"
            class="inline-block w-full px-3 py-2 rounded border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-nonerounded focus:outline-none"
            placeholder="Email address"
            novalidate
          />
          <span v-if="errors.email" class="text-red-500">{{
            errors.email
          }}</span>
        </div>
        <div class="mb-3">
          <input
            v-model="password"
            aria-label="Password"
            name="password"
            type="password"
            :class="{ 'border-red-500': errors.password }"
            class="inline-block w-full px-3 py-2 rounded border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-nonerounded focus:outline-none"
            placeholder="Password"
            novalidate
          />
          <span v-if="errors.password" class="text-red-500">{{
            errors.password
          }}</span>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="text-sm leading-5">
            <nuxt-link
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              to="/forgot-password"
            >
              Forgot your password?
            </nuxt-link>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Create account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Shared/Alert'

export default {
  components: { Alert },
  data() {
    return {
      register: {
        email: '',
        username: '',
        password: '',
      },
      error: null,
      errors: { username: null, email: null, password: null },
      success: null,
    }
  },
  methods: {
    async userRegister() {
      try {
        const response = await this.$axios.post('/api/auth/register', {
          username: this.register.username,
          email: this.register.email,
          password: this.register.password,
        })
        this.success = response.data.message
        if (this.error) {
          this.error = null
        }
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
