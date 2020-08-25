<template>
  <header id="header" class="dark:bg-gray-700">
    <nav class="container mx-auto flex-wrap p-6 flex justify-between">
      <div
        class="flex items-center flex-no-shrink text-primary-500 dark:text-white"
      >
        <Logo width="40px" height="40px" />
        <span class="font-semibold text-xl ml-2">{{ $config.title }}</span>
      </div>
      <div class="md:hidden flex items-center">
        <button
          class="px-3 py-2 border rounded text-primary-500 border-primary-500 hover:text-primary-400 hover:border-primary-400"
          @click="mobileNavToggle"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full md:flex md:items-center md:w-auto"
        :class="mobileNavActive ? 'block' : 'hidden'"
      >
        <ul v-if="isAuthenticated" class="list-reset md:flex justify-end">
          <li v-for="(link, text) in links" :key="text" :value="link">
            <nuxt-link
              class="inline-block md:inline-block no-underline hover:text-underline text-primary-500 hover:text-secondary-500 dark:text-white dark-hover:text-secondary-200 py-2 md:py-1 md:px-2 font-roboto"
              :to="link"
              >{{ text }}</nuxt-link
            >
          </li>
        </ul>
        <ul v-else class="list-reset md:flex justify-end">
          <li>
            <nuxt-link
              class="inline-block no-underline text-primary-500 hover:text-secondary-500 py-2 md:py-1 md:px-2 dark:text-white font-roboto"
              to="/register"
              >Register
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="inline-block no-underline text-primary-500 hover:text-secondary-500 dark:text-white dark-hover:text-secondary-200 py-2 md:py-1 md:px-2 font-roboto"
              to="/login"
              >Login
            </nuxt-link>
          </li>
        </ul>
        <AccountDropdown v-if="isAuthenticated" />
      </div>
    </nav>
  </header>
</template>
<script>
import AccountDropdown from '@/components/Shared/AccountDropdown'
import Logo from '@/assets/vectors/logo.svg?inline'

export default {
  components: {
    Logo,
    AccountDropdown,
  },

  props: {
    links: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {
        username: 'MrDemonWolf',
      },
      isAuthenticated: false,
      mobileNavActive: false,
      accountNavActive: false,
    }
  },

  methods: {
    mobileNavToggle() {
      this.mobileNavActive = !this.mobileNavActive
    },
  },
}
</script>
<style lang="postcss" scoped>
.dark-mode .nuxt-link-active {
  @apply text-blue-700;
}

.nuxt-link-active {
  @apply text-red-700;
}
</style>
