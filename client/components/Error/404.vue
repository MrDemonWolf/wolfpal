<template>
  <div class="w-1/2">
    <div class="flex items-center">
      <fa
        :icon="['fas', 'skull']"
        class="text-primary-500 text-6xl block m-auto"
      />
    </div>
    <h2
      class="leading-10 text-center text-5xl font-bold font-roboto text-primary-500 dark:text-white mt-4"
    >
      We couldn't find that {{ type }}
    </h2>
    <p class="mt-4 text-center font-montserrat text-black dark:text-white">
      The {{ type }} you are looking for has either been moved or as dead as a
      doornail.
    </p>
    <div class="mt-4 flex items-center">
      <nuxt-link
        class="block m-auto px-4 py-2 text-white bg-primary-500 hover:text-primary-500 hover:bg-white rounded transition ease-in-out duration-150 font-roboto font-bold"
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
