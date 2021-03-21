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
          Start your 30-day free trial
        </h2>
        <p
          class="mt-2 text-sm text-center text-gray-600 max-w dark:text-gray-200 font-roboto"
        >
          Or
          <!-- space -->
          <nuxt-link
            class="font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-roboto"
            to="/login"
          >
            sign in to your account
          </nuxt-link>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" novalidate @submit.prevent="userRegister">
            <SharedAlert
              v-if="$store.state.register.messages.error"
              type="danger"
              :message="$store.state.register.messages.error"
            />
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div class="mt-1">
                <input
                  id="username"
                  v-model="register.username"
                  aria-label="Username"
                  placeholder="Example"
                  name="username"
                  type="text"
                  autocomplete="username"
                  :class="{
                    'border-red-500':
                      $store.state.register.messages.errors.username ||
                      $store.state.register.messages.error,
                  }"
                  class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <span
                  v-if="$store.state.register.messages.errors.username"
                  class="text-red-500"
                  >{{ $store.state.register.messages.errors.username }}</span
                >
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  v-model="register.email"
                  aria-label="Email address"
                  placeholder="example@example.com"
                  name="email"
                  type="email"
                  autocomplete="email"
                  :class="{
                    'border-red-500':
                      $store.state.register.messages.errors.email ||
                      $store.state.register.messages.error,
                  }"
                  class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <span
                  v-if="$store.state.register.messages.errors.email"
                  class="text-red-500"
                  >{{ $store.state.register.messages.errors.email }}</span
                >
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  v-model="register.password"
                  aria-label="Password"
                  placeholder="****************"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  :class="{
                    'border-red-500':
                      $store.state.register.messages.errors.password,
                  }"
                  class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <span
                v-if="$store.state.register.messages.errors.password"
                class="text-red-500"
                >{{ $store.state.register.messages.errors.password }}</span
              >
            </div>

            <div class="flex justify-end">
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-primary-500 hover:text-primary-600"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span v-if="!isLoading">Start free trial</span>
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
                <span class="px-2 text-gray-500 bg-white">
                  Or continue with
                </span>
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
                  <fa
                    :icon="['fab', 'github']"
                    class="w-5 h-5 text-brand-github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/vectors/logo.svg?inline'

export default {
  components: {
    Logo,
  },

  middleware: ['alreadyAuthenticated', 'registration'],

  data() {
    return {
      isLoading: false,
      register: {
        email: '',
        username: '',
        password: '',
      },
    }
  },

  head({ $config: { title } }) {
    return {
      title: 'Register',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: `Don't already have a ${title} account?  You can register for a account here.`,
        },
      ],
    }
  },

  methods: {
    async userRegister() {
      try {
        this.isLoading = true
        await this.$store.dispatch('register/RESET_MESSAGES')
        const res = await this.$axios.$post('/api/auth/register', {
          username: this.register.username,
          email: this.register.email,
          password: this.register.password,
        })

        switch (res.code) {
          case 'PENDING_CONFIRMATION':
            this.$toast.success(
              'Please confirm your email address to complete the registration.',
              {
                position: 'bottom-right',
              }
            )
            break

          default:
            this.$toast.success(
              'Your account has been created and is ready to use.',
              {
                position: 'bottom-right',
              }
            )
            break
        }

        await this.$auth.loginWith('local', {
          data: {
            email: this.register.email,
            password: this.register.password,
          },
        })
      } catch (e) {
        if (e.response.data.codes) {
          const { username, email, password } = e.response.data.codes

          if (username) {
            switch (username) {
              case 'INVALID_CHARACTERS':
                this.$store.commit(
                  'register/SET_MESSAGE_ERRORS_USERNAME',
                  'Username is invalid. Must only contain numbers or letters.'
                )
                break
              case 'NOT_LONG_ENOUGH':
                this.$store.commit(
                  'register/SET_MESSAGE_ERRORS_USERNAME',
                  'Username must be between 3 and 28 characters long.'
                )
                break
              case 'REQUIRED':
                this.$store.commit(
                  'register/SET_MESSAGE_ERRORS_USERNAME',
                  'Username is required.'
                )
                break
              default:
            }
          }
          if (email) {
            switch (email) {
              case 'INVALID':
                this.$store.commit(
                  'register/SET_MESSAGE_ERRORS_EMAIL',
                  'Email is invalid.'
                )
                break
              case 'REQUIRED':
                this.$store.commit(
                  'register/SET_MESSAGE_ERRORS_EMAIL',
                  'Email is required.'
                )
                break
              default:
            }
          }

          if (password) {
            switch (password) {
              case 'NOT_LONG_ENOUGH':
                this.$store.commit(
                  'register/SET_MESSAGE_ERRORS_PASSWORD',
                  'Password must be between 8 and 56 characters long.'
                )
                break
              case 'REQUIRED':
                this.$store.commit(
                  'register/SET_MESSAGE_ERRORS_PASSWORD',
                  'Password is required.'
                )
                break
              default:
            }
          }
          this.isLoading = false
        } else if (e.response.data.code) {
          switch (e.response.data.code) {
            case 'ALREADY_EXISTS':
              this.$store.commit(
                'register/SET_MESSAGE_ERROR',
                'The email or username you are attempting to register with is already in use.'
              )
              break

            default:
              this.$toast.error('Oops.. Something Went Wrong..', {
                position: 'bottom-right',
              })
              break
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
  },
}
</script>
