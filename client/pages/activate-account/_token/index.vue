<template>
  <div
    class="h-80 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <loading
      :active.sync="loader.isLoading"
      :can-cancel="false"
      :color="loader.color"
      :background-color="loader.bgColor"
      :height="loader.height"
      :width="loader.width"
      :is-full-page="loader.fullPage"
    />
    <div v-if="!loader.isLoading" class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-200"
      >
        <Alert v-if="success" type="success" :message="success" />
        <Alert v-if="error" type="danger" :message="error" />
        <div v-if="error" class="mt-6 flex items-center justify-between">
          <div class="text-sm leading-5">
            <nuxt-link
              class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              to="/activate-account/resend"
            >
              Resend activation link?
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import Alert from '@/components/Shared/Alert'

export default {
  loading: false,
  components: { Alert, Loading },
  data() {
    return {
      error: null,
      errors: { email: null },
      success: null,
      loader: {
        isLoading: true,
        fullPage: true,
        color: '#007bff',
        bgColor: '#ffffff',
        height: 64,
        width: 64,
      },
    }
  },
  mounted() {
    this.userActivateAccount()
  },
  methods: {
    async userActivateAccount() {
      try {
        const response = await this.$axios.put(
          `/api/user/activate-account/${this.$route.params.token}`
        )
        this.success =
          response.data.message + 'Redirecting you in a few moments.'
        this.loader.isLoading = false
        setTimeout(() => {
          this.$router.push({ path: '/login' })
        }, 1000 * 5)
        if (this.error) {
          this.error = null
        }
      } catch (e) {
        this.loader.isLoading = false
        this.error = e.response.data.error
        if (this.success) {
          this.success = null
        }
      }
    },
  },
}
</script>
