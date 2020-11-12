<template>
  <div class="w-1/2">
    <div class="flex items-center">
      <fa
        :icon="['fas', 'skull']"
        class="block m-auto text-6xl text-primary-500 dark:text-gray-400"
      />
    </div>
    <h2
      class="mt-4 text-5xl font-bold leading-10 text-center font-roboto text-primary-500 dark:text-white"
    >
      We couldn't find that {{ type }}
    </h2>
    <p class="mt-4 text-center text-black font-montserrat dark:text-white">
      The {{ type }} you are looking for has either been moved or as dead as a
      doornail.
    </p>
    <div class="flex items-center mt-4">
      <nuxt-link
        class="block px-4 py-2 m-auto font-bold text-white transition duration-150 ease-in-out rounded bg-primary-500 hover:text-primary-500 hover:bg-white dark:bg-white dark:text-primary-500 dark-hover:text-white dark-hover:bg-primary-500 font-roboto"
        to="/"
      >
        Back Home
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'page',
    },
  },
}
</script>
