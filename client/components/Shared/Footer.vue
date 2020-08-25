<template>
  <footer class="text-gray-700 body-font">
    <div
      class="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col"
    >
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
        &copy; {{ year }}
        <a
          :href="$config.copyrightLink"
          class="text-gray-600 ml-1"
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
