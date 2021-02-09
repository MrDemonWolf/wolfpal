<template>
  <div class="relative overflow-hidden bg-gray-200 dark:bg-gray-900">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 mb-48 text-gray-700 transform translate-x-1/2 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        ></rect>
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <nav
        class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <nuxt-link to="/">
              <span class="sr-only">{{ $config.title }}</span>
              <Logo class="w-auto h-8 sm:h-10" :alt="`${$config.title} Logo`" />
            </nuxt-link>
            <div class="flex items-center -mr-2 md:hidden">
              <button
                id="main-menu"
                type="button"
                class="inline-flex items-center justify-center p-2 text-white rounded-md bg-primary-800 hover:bg-primary-600 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                aria-haspopup="true"
                x-bind:aria-expanded="open"
                @click="mobileNavToggle"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  x-description="Heroicon name: outline/menu"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden space-x-10 md:flex md:ml-10">
            <nuxt-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.url"
              class="font-medium text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-700 font-roboto"
              >{{ link.text }}</nuxt-link
            >
          </div>
        </div>
        <div class="hidden md:flex">
          <nuxt-link
            to="/login"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-primary-500 hover:bg-primary-600 font-roboto"
          >
            Log in
          </nuxt-link>
        </div>
      </nav>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
        ><div
          v-if="mobileNavActive"
          x-cloak=""
          x-description="Mobile menu, show/hide based on menu open state."
          class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
        >
          <div
            class="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <Logo class="w-auto h-8" :alt="`${$config.title} Logo`" />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-500 bg-white rounded-md dark:text-white dark:bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  @click="mobileNavToggle"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="w-6 h-6"
                    x-description="Heroicon name: outline/x"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                <a
                  v-for="(link, index) in links"
                  :key="index"
                  :to="link.url"
                  class="block px-3 py-2 text-base font-medium text-black rounded-md dark:text-white hover:text-gray-900 hover:bg-gray-50 font-roboto"
                  role="menuitem"
                  >{{ link.text }}</a
                >
              </div>
              <div role="none">
                <a
                  href="#"
                  class="block w-full px-5 py-3 font-medium text-center text-white bg-primary-500 hover:bg-primary-600 font-roboto"
                  role="menuitem"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div></transition
      >

      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <h1
                  class="mt-4 text-4xl font-extrabold tracking-tight text-black dark:text-white font-roboto sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                >
                  <span class="md:block">Welcome to</span>
                  <!-- space -->
                  <span
                    class="text-primary-500 dark:text-primary-400 md:block"
                    >{{ $config.title }}</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-gray-800 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-montserrat"
                >
                  {{ $config.landing.description }}
                </p>
              </div>
            </div>
            <div
              v-if="$config.registration"
              class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6"
            >
              <div
                class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
              >
                <div class="px-4 py-8 sm:px-10">
                  <div>
                    <p class="text-sm font-medium text-gray-700">
                      Sign in with
                    </p>

                    <div class="grid grid-cols-3 gap-3 mt-1">
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

                  <div class="relative mt-6">
                    <div
                      class="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 text-gray-500 bg-white"> Or </span>
                    </div>
                  </div>

                  <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                      <div>
                        <label for="name" class="sr-only">Username</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          autocomplete="name"
                          placeholder="Username"
                          required=""
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label for="email" class="sr-only">Email</label>
                        <input
                          id="email"
                          type="text"
                          name="email"
                          autocomplete="email"
                          placeholder="Email"
                          required=""
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
                          autocomplete="current-password"
                          required=""
                          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 font-roboto"
                        >
                          Create your account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="px-4 py-6 border-t-2 border-gray-200 dark:bg-gray-50 dark:border-gray-200 bg-gray-50 sm:px-10"
                >
                  <p class="text-xs leading-5 text-gray-500 dark:text-black">
                    By signing up, you agree to our
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Terms</a
                    >,
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Data Policy</a
                    >
                    and
                    <a
                      href="#"
                      class="font-medium text-gray-900 hover:underline"
                      >Cookies Policy</a
                    >.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>
</template>

<script>
// import Alert from '@/components/Shared/Alert'
import Logo from '@/assets/vectors/logo.svg?inline'

export default {
  components: { Logo },

  layout: 'landing',

  data() {
    return {
      mobileNavActive: false,
      isRegister: true,
      register: {
        email: '',
        username: '',
        password: '',
        errors: {},
      },
      links: [
        {
          url: '#product',
          text: 'Product',
        },
        {
          url: '#features',
          text: 'Features',
        },
      ],
    }
  },

  methods: {
    mobileNavToggle() {
      this.mobileNavActive = !this.mobileNavActive
    },
    async userRegister() {
      try {
        const res = await this.$axios.$post('/api/auth/register', {
          username: this.register.username,
          email: this.register.email,
          password: this.register.password,
        })

        this.$toast.success(res.message, {
          position: 'bottom-right',
        })
        await this.$auth.loginWith('local', {
          data: {
            email: this.register.email,
            password: this.register.password,
          },
        })
      } catch (e) {
        if (e.response.data.errors) {
          return (this.register.errors = e.response.data.errors)
        }
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
  },
}
</script>
