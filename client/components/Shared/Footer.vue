<template>
  <footer
    class="bg-white text-primary-400 body-font dark:bg-gray-900 dark:text-white"
  >
    <div
      class="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col"
    >
      <p class="text-md m:ml-4 sm:pl-4 sm:py-2 md:mt-2 sm:block hidden">
        &copy; {{ year }}
        <a
          :href="$config.copyrightLink"
          class="text-primary-500 ml-1 dark:text-gray-400 hover:text-primary-700 dark-hover:text-gray-50"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ $config.copyright }}
        </a>
      </p>
      <div
        class="inline-flex sm:ml-auto md:mt-2 justify-center sm:justify-start"
      >
        <button
          class="py-2 md:py-1 md:px-2 focus:outline-none"
          aria-label="Color Mode"
          @click="
            $colorMode.value === 'dark'
              ? ($colorMode.preference = 'light')
              : ($colorMode.preference = 'dark')
          "
        >
          <fa
            v-if="$colorMode.value === 'light'"
            :icon="['fas', 'sun']"
            class="w-5 h-5 text-2xl align-middle"
          />
          <fa
            v-else
            class="w-5 h-5 text-2xl align-middle"
            :icon="['far', 'moon']"
          />
        </button>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
