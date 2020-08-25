<template>
  <div class="relative inline-block text-left md:block">
    <button
      v-click-outside="accountDropdownHide"
      type="button"
      class="py-2 md:py-1 md:px-2 focus:outline-none inline-flex justify-center w-full font-bold text-blue-700 dark:text-white transition ease-in-out duration-150 font-roboto"
      @keydown.esc="accountDropdownHide"
      @click="accountDropdown"
    >
      {{ user.username }}
      <fa
        :icon="['fas', 'caret-down']"
        class="ml-2"
        width="1.25rem"
        height="1.25rem"
      />
    </button>
    <div
      class="origin-top-left md:origin-top-right absolute left-0 md:right-0 mt-2 w-30 md:w-50"
      :class="accountNavActive ? 'block' : 'hidden'"
    >
      <div
        class="rounded-md bg-white shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <!-- <div class="py-1">
                <span class="block px-4 py-2 text-sm leading-5 text-gray-700"
                  >Role: <strong>Owner</strong></span
                >
              </div> -->
        <div class="border-t border-gray-100"></div>
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            >Account</a
          >
          <!-- <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  >Admin</a
                > -->
          <theme-switcher
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          />
        </div>
        <div class="border-t border-gray-100"></div>
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from '@/components/Shared/ThemeSwitcher'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    ThemeSwitcher,
  },
  directives: {
    ClickOutside,
  },
  data() {
    return {
      user: {
        username: 'MrDemonWolf',
      },
      isAuthenticated: true,
      accountNavActive: false,
    }
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },

  methods: {
    accountDropdown() {
      this.accountNavActive = !this.accountNavActive
    },
    accountDropdownHide() {
      this.accountNavActive = false
    },
  },
}
</script>
