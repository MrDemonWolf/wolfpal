<template>
  <footer
    class="bg-white text-primary-400 body-font dark:bg-gray-900 dark:text-white"
  >
    <div
      class="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col"
    >
      <p class="text-md m:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
        &copy; {{ year }}
        <a
          :href="$config.copyrightLink"
          class="text-primary-500 ml-1 dark:text-gray-400 hover:text-primary-700 dark-hover:text-gray-500"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ $config.copyright }}
        </a>
      </p>
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
