<template>
  <div style="min-height: 640px" class="bg-gray-100">
    <div
      class="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900"
      @keydown.escape="sidebarOpen = false"
    >
      <div
        v-if="sidebarOpen"
        class="md:hidden"
        x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state."
      >
        <div class="fixed inset-0 z-40 flex">
          <transition
            enter-active-class="transition-opacity duration-300 ease-linear"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-linear"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
            ><div
              v-if="sidebarOpen"
              x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state."
              aria-hidden="true"
              class="fixed inset-0"
              @click="sidebarOpen = false"
            >
              <div class="absolute inset-0 bg-gray-600 opacity-75"></div></div
          ></transition>
          <transition
            enter-active-class="transition duration-300 ease-in-out transform"
            enter-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-300 ease-in-out transform"
            leave-class="translate-x-0"
            leave-to-class="-translate-x-full"
            ><div
              v-if="sidebarOpen"
              x-description="Off-canvas menu, show/hide based on off-canvas menu state."
              class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white dark:bg-gray-800"
            >
              <div class="absolute top-0 right-0 pt-2 -mr-12">
                <button
                  v-if="sidebarOpen"
                  class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <svg
                    class="w-6 h-6 text-white"
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
              <div class="flex items-center flex-shrink-0 px-4">
                <Logo
                  class="inline-block w-auto h-8"
                  :alt="`${$config.title} Logo`"
                />
                <span
                  class="ml-3 text-xl font-bold align-middle text-primary-500 font-roboto dark:text-primary-300"
                >
                  {{ $config.title }}</span
                >
              </div>
              <div class="flex-1 h-0 mt-5 overflow-y-auto">
                <nav class="px-2 space-y-1">
                  <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                  <nuxt-link
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.url"
                    class="flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 hover:text-gray-900 group"
                  >
                    {{ link.text }}
                  </nuxt-link>
                </nav>
              </div>
            </div></transition
          >
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Static sidebar for desktop -->
      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col flex-1 h-0">
            <div class="flex items-center flex-shrink-0 h-16 px-4 bg-gray-800">
              <Logo
                class="inline-block w-auto h-8"
                :alt="`${$config.title} Logo`"
              />
              <span
                class="ml-3 text-xl font-bold align-middle text-primary-500 font-roboto dark:text-primary-300"
              >
                {{ $config.title }}</span
              >
            </div>
            <div class="flex flex-col flex-1 overflow-y-auto">
              <nav class="flex-1 px-2 py-4 space-y-1 bg-gray-700">
                <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                <nuxt-link
                  v-for="(link, index) in links"
                  :key="index"
                  :to="link.url"
                  class="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md dark:text-white dark:hover:text-gray-900 hover:bg-gray-50 hover:text-gray-900 group"
                >
                  {{ link.text }}
                </nuxt-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-1 w-0 overflow-hidden">
        <div class="relative z-10 flex flex-shrink-0 h-16 bg-white">
          <button
            class="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden dark:bg-gray-700 dark:text-white"
            @click.stop="sidebarOpen = true"
          >
            <span class="sr-only">dropDownOpen sidebar</span>
            <svg
              class="w-6 h-6"
              x-description="Heroicon name: outline/menu-alt-2"
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
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </button>
          <div class="flex justify-end flex-1 px-4 dark:bg-gray-800">
            <div class="flex items-center ml-4 md:ml-6">
              <button
                class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="w-6 h-6"
                  x-description="Heroicon name: outline/bell"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <!-- <div @click.away="dropDownOpen = false" class="relative ml-3"> -->
                <div>
                  <button
                    id="user-menu"
                    aria-haspopup="true"
                    x-bind:aria-expanded="dropDownOpen"
                    class="flex items-center max-w-xs p-2 text-sm bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-primary-100 font-roboto dark:bg-gray-700"
                    @click="dropDownOpen = !dropDownOpen"
                  >
                    <span class="sr-only">dropDownOpen user menu</span>
                    {{ $auth.user.username }}
                    <fa
                      :icon="['fas', 'caret-down']"
                      class="w-5 h-5 ml-2 align-middle"
                    />
                  </button>
                </div>
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                  ><div
                    v-if="dropDownOpen"
                    x-description="Profile dropdown panel, show/hide based on dropdown state."
                    class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-200"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="/account"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dakr:text-white"
                      role="menuitem"
                      >My Account</a
                    >
                    <a
                      href="/billing"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dakr:text-white"
                      role="menuitem"
                      >Mange Billing</a
                    >

                    <button
                      role="menuitem"
                      class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 dakr:text-white"
                      @click="signout"
                    >
                      Sign out
                    </button>
                  </div></transition
                >
              </div>
            </div>
          </div>
        </div>

        <main
          class="relative flex-1 overflow-y-auto focus:outline-none"
          tabindex="0"
          x-data=""
          x-init="$el.focus()"
        >
          <div class="py-6">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <Nuxt />
            </div>
          </div>
        </main>
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

  data() {
    return {
      sidebarOpen: false,
      dropDownOpen: false,
      links: [
        {
          url: '/dashboard',
          text: 'Dashboard',
        },
        {
          url: '/dashboard/goals/weekly',
          text: 'Weekly Goals',
        },
      ],
    }
  },

  methods: {
    async signout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply bg-gray-100 text-gray-900;
}
.dark .nuxt-link-exact-active {
  @apply bg-gray-100 text-gray-900;
}
</style>
