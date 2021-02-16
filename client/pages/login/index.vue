<template>
  <div>
    <div
      class="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo class="w-auto h-12 mx-auto" />

        <h2
          class="mt-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white font-roboto"
        >
          Sign in to your account
        </h2>
        <p
          class="mt-2 text-sm text-center text-gray-600 max-w dark:text-gray-200 font-roboto"
        >
          Or
          <!-- space -->
          <nuxt-link
            class="font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-roboto"
            to="/register"
          >
            start your 30-day free trial
          </nuxt-link>
        </p>
      </div>
      <Basic v-show="!twoFactorTokenRequested" />
      <TwoFactor v-show="twoFactorTokenRequested" />
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/vectors/logo.svg?inline'
import Basic from '@/components/Login/Basic'
import TwoFactor from '@/components/Login/TwoFactor'

export default {
  components: {
    Logo,
    Basic,
    TwoFactor,
  },

  middleware: ['alreadyAuthenticated'],

  data() {
    return {
      twoFactorTokenRequested: true,
    }
  },
}
</script>
