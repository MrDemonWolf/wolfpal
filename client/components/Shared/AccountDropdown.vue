<template>
  <div class="relative inline-block text-left md:block">
    <button
      v-click-outside="accountDropdownHide"
      type="button"
      class="py-2 md:py-1 md:px-2 text-xl focus:outline-none justify-center w-full font-bold text-primary-500 dark:text-primary-300 transition ease-in-out duration-150 font-roboto"
      @keydown.esc="accountDropdownHide"
      @click.prevent="accountDropdown"
    >
      {{ $auth.user.username }}
      <fa
        :icon="['fas', 'caret-down']"
        class="ml-2"
        width="1.25rem"
        height="1.25rem"
      />
    </button>
    <div
      class="origin-top-left md:origin-top-right absolute left-0 md:right-0 w-30 md:w-50"
      :class="accountNavActive ? 'block' : 'hidden'"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded border-gray-500 border-2 border border-opacity-25"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-white dark-hover:text-white dark-hover:bg-gray-700"
          aria-label="Color Mode"
          role="menuitem"
          @click="
            $colorMode.value === 'dark'
              ? ($colorMode.preference = 'light')
              : ($colorMode.preference = 'dark')
          "
        >
          <span>{{
            $colorMode.value === 'dark' ? 'Dark Mode' : 'Light Mode'
          }}</span>
          <fa
            v-if="$colorMode.value === 'light'"
            :icon="['far', 'sun']"
            class="w-6 h-6 align-middle"
          />
          <fa v-else :icon="['far', 'moon']" class="w-6 h-6 align-middle" />
        </div>
        <a
          href="#"
          class="block px-4 py-3 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:text-white dark-hover:text-white dark-hover:bg-gray-700"
          role="menuitem"
        >
          Logout</a
        >
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
    accountDropdown() {
      this.accountNavActive = !this.accountNavActive
    },
    accountDropdownHide() {
      this.accountNavActive = false
    },
  },
}
</script>
