<template>
  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" novalidate @submit.prevent="userLogin">
        <Alert
          v-if="$store.state.login.messages.error"
          type="danger"
          :message="$store.state.login.messages.error"
        />
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input
              id="email"
              v-model="login.email"
              aria-label="Email address"
              placeholder="example@example.com"
              name="email"
              type="email"
              autocomplete="email"
              :class="{
                'border-red-500':
                  $store.state.login.messages.errors.email ||
                  $store.state.login.messages.error,
              }"
              class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <span
              v-if="$store.state.login.messages.errors.email"
              class="text-red-500"
              >{{ $store.state.login.messages.errors.email }}</span
            >
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div class="mt-1">
            <input
              id="password"
              v-model="login.password"
              aria-label="Password"
              placeholder="****************"
              name="password"
              type="password"
              autocomplete="current-password"
              :class="{
                'border-red-500':
                  $store.state.login.messages.errors.password ||
                  $store.state.login.messages.error,
              }"
              class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <span
            v-if="$store.state.login.messages.errors.password"
            class="text-red-500"
            >{{ $store.state.login.messages.errors.password }}</span
          >
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="w-4 h-4 border-gray-300 rounded text-primary-500 focus:ring-indigo-500"
            />
            <label for="remember_me" class="block ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <nuxt-link
              to="/forgot-password"
              class="font-medium text-primary-500 hover:text-primary-600"
            >
              Forgot your password?
            </nuxt-link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span v-if="!isLoading">Sign in</span>
            <span v-else>
              <fa
                :icon="['fas', 'circle']"
                class="inline-block w-3 h-3 mr-2 text-white -animate-delay-1 animate-bounce"
              />
              <fa
                :icon="['fas', 'circle']"
                class="inline-block w-3 h-3 mr-2 text-white -animate-delay-2 animate-bounce"
              />
              <fa
                :icon="['fas', 'circle']"
                class="inline-block w-3 h-3 mr-2 text-white animate-bounce"
              />
            </span>
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 text-gray-500 bg-white"> Or continue with </span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3 mt-6">
          <div>
            <a
              href="#"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <span class="sr-only">Sign in with Google</span>
              <fa
                :icon="['fab', 'google']"
                class="w-5 h-5 text-brand-googlePlus"
              />
            </a>
          </div>

          <div>
            <a
              href="#"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <span class="sr-only">Sign in with Twitter</span>
              <fa
                :icon="['fab', 'twitter']"
                class="w-5 h-5 text-brand-twitter"
              />
            </a>
          </div>

          <div>
            <a
              href="#"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <span class="sr-only">Sign in with GitHub</span>
              <fa :icon="['fab', 'github']" class="w-5 h-5 text-brand-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Shared/Alert'

export default {
  components: {
    Alert,
  },

  data() {
    return {
      isLoading: false,
      login: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    async userLogin() {
      try {
        this.isLoading = true

        await this.$store.dispatch('login/RESET_MESSAGES')
        const res = await this.$axios.$post('/api/auth/login', {
          email: this.login.email,
          password: this.login.password,
        })
        if (!res.twoFactor) {
          return this.loginNo2FA(res.access_token, res.refresh_token)
        } else {
          this.$store.commit('login/SET_TWO_FACTOR_TOKEN', res.token)
          this.$store.commit('login/SET_TWO_FACTOR_TOKEN_REQUESTED', true)
        }
      } catch (e) {
        if (e.response.data.codes) {
          const { email, password } = e.response.data.codes

          if (email) {
            switch (email) {
              case 'INVALID':
                this.$store.commit(
                  'login/SET_MESSAGE_ERRORS_EMAIL',
                  'Email is invalid.'
                )
                break
              case 'REQUIRED':
                this.$store.commit(
                  'login/SET_MESSAGE_ERRORS_EMAIL',
                  'Email is required.'
                )
                break
              default:
                break
            }
          }

          if (password) {
            switch (password) {
              case 'REQUIRED':
                this.$store.commit(
                  'login/SET_MESSAGE_ERRORS_PASSWORD',
                  'Password is required.'
                )
                break
              default:
                break
            }
          }
        } else if (e.response.data.code) {
          switch (e.response.data.code) {
            case 'NON_EXISTENT':
            case 'INVALID_CREDENTIALS':
              this.$store.commit(
                'login/SET_MESSAGE_ERROR',
                'Either email or password is invalid.'
              )
              break

            default:
          }
          this.isLoading = false
        } else {
          this.isLoading = false
          this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }
      }
    },
    async loginNo2FA(accessToken, refreshToken) {
      try {
        await this.$auth.setUserToken(accessToken, refreshToken)
        this.isLoading = false
      } catch (e) {
        this.isLoading = false
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
  },
}
</script>