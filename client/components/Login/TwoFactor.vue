<template>
  <div class="mt-8 sm:mx-auto sm:w-1/2 sm:max-w-xs">
    <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" @submit.prevent="userLoginWithTwoFactor">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Enter your 2FA verification token
          </label>
          <div class="mt-1">
            <input
              id="twoFactorCode"
              v-model="loginTwoFactor.code"
              aria-label="Two Factor"
              placeholder="123456"
              name="twoFactorCode"
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              :class="{ 'border-red-500': loginTwoFactor.errors.code }"
              class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <span v-if="loginTwoFactor.errors.code" class="text-red-500">{{
              loginTwoFactor.errors.code
            }}</span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
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
      loginTwoFactor: {
        code: '',
        errors: { code: null },
      },
    }
  },

  method: {
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
        this.loginTwoFactor.errors = { code: null }

        if (e.response.data.errors) {
          const { code } = e.response.data.errors

          if (code) {
            switch (code) {
              case 'REQUIRED':
                this.loginTwoFactor.errors.code = 'Code is required.'
                break
              default:
                this.$toast.error('Oops.. Something Went Wrong..', {
                  position: 'bottom-right',
                })
                break
            }
          }
          return this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }

        switch (e.response.data.error) {
          case 'INVALID_TWO_FACTOR_CODE':
            this.loginTwoFactor.errors.code = 'Invalid two factor token.'
            break

          default:
            this.$toast.error('Oops.. Something Went Wrong..', {
              position: 'bottom-right',
            })
            break
        }
      }
    },
  },
}
</script>
