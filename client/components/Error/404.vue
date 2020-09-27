<template>
  <div class="error-404">
    <fa :icon="['fas', 'skull']" />
    <h1 class="text-2xl font-bold font-roboto text-primary-500 dark:text-white">
      We couldn't find that page
    </h1>
    <p class="font-montserrat text-black dark:text-white">
      The page you are looking for has either been moved or as dead as a
      doornail.
    </p>
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
