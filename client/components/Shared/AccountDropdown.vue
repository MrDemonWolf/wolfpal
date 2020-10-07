<template>
  <div class="relative inline-block text-left md:block">
    <button
      v-click-outside="accountDropdownHide"
      type="button"
      class="py-2 md:py-1 md:px-2 text-xl focus:outline-none justify-center w-full font-bold text-primary-800 dark:text-primary-300 transition ease-in-out duration-150 font-roboto"
      @keydown.esc="accountDropdownHide"
      @click.prevent="accountDropdown"
    >
      {{ $auth.user.username }}
      <fa :icon="['fas', 'caret-down']" class="ml-2 w-5 h-5 align-middle" />
    </button>
    <div
      class="origin-top-left md:origin-top-right absolute left-0 md:right-0 w-30 md:w-50"
      :class="accountNavActive ? 'block' : 'hidden'"
    >
      <div
        class="rounded-md shadow-xs bg-white dark:bg-gray-100 border-gray-500 border-2 border-opacity-25"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="px-4 py-3">
          <p class="text-sm leading-5 inline">Role:</p>
          <p class="text-sm leading-5 font-medium text-gray-900 inline">
            {{ $auth.user.role | capitalize }}
          </p>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-300"></div>
        <div class="py-1">
          <nuxt-link
<<<<<<< HEAD
            to="/account"
            class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-white dark-hover:text-black dark-hover:bg-gray-300"
          >
            My Account</nuxt-link
=======
            to="/settings"
            class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-white dark-hover:text-black dark-hover:bg-gray-300"
          >
            Settings</nuxt-link
>>>>>>> 12f48634b4be217aad61eaf4bc7e0b121863da59
          >
          <!-- <a
            href="#"
            class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-white dark-hover:text-black dark-hover:bg-gray-300"
            >Admin</a
          > -->
          <div
            class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-white dark-hover:text-black dark-hover:bg-gray-300"
            aria-label="Color Mode"
            role="menuitem"
            @click="
              $colorMode.value === 'dark'
                ? ($colorMode.preference = 'light')
                : ($colorMode.preference = 'dark')
            "
          >
            <span>{{
              $colorMode.value === 'dark' ? 'Light Mode' : 'Dark Mode'
            }}</span>
          </div>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-300"></div>
        <div class="py-1">
          <a
            class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-white dark-hover:text-v dark-hover:bg-gray-300"
            role="menuitem"
            @click="logout"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      accountNavActive: false,
    }
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    accountDropdown() {
      this.accountNavActive = !this.accountNavActive
    },
    accountDropdownHide() {
      this.accountNavActive = false
    },
  },
}
</script>
