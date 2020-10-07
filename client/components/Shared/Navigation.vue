<template>
  <header id="header" class="bg-white dark:bg-gray-900">
    <nav class="container flex flex-wrap justify-between p-6 mx-auto">
      <nuxt-link
        active-class="false"
        class="flex items-center flex-no-shrink text-primary-500 dark:text-primary-300"
        to="/"
      >
        <Logo width="40px" height="40px" />
        <span class="ml-2 text-xl font-semibold">{{ $config.title }}</span>
      </nuxt-link>
      <div class="flex items-center md:hidden">
        <button
          class="px-3 py-2 border rounded text-primary-500 border-primary-500 hover:text-primary-400 hover:border-primary-400"
          @click="mobileNavToggle"
        >
          <svg
            class="w-3 h-3 fill-current"
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
        <ul v-if="$auth.loggedIn" class="justify-end list-reset md:flex">
          <li v-for="(link, index) in links" :key="index">
            <nuxt-link
              class="inline-block py-2 text-xl text-black no-underline hover:text-underline hover:text-gray-800 dark:text-white dark-hover:text-primary-200 md:py-1 md:px-2 font-roboto"
              :to="link.url"
              >{{ link.text }}</nuxt-link
            >
          </li>
        </ul>
        <ul v-else class="justify-end list-reset md:flex">
          <li>
            <nuxt-link
              v-if="$config.registration"
              class="inline-block py-2 text-xl no-underline hover:text-underline text-primary-500 hover:text-primary-600 dark:text-white dark-hover:text-primary-200 md:py-1 md:px-2 font-roboto"
              to="/register"
              >Register
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="inline-block py-2 text-xl no-underline hover:text-underline text-primary-500 hover:text-primary-600 dark:text-white dark-hover:text-primary-200 md:py-1 md:px-2 font-roboto"
              to="/login"
              >Login
            </nuxt-link>
          </li>
        </ul>
        <AccountDropdown v-if="$auth.loggedIn" />
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
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mobileNavActive: false,
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
  @apply text-primary-300;
}

.nuxt-link-active {
  @apply text-primary-600;
}
</style>
