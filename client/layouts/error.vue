<template>
  <div class="flex items-center justify-center h-84">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from '@/components/Error/404'
import error500 from '@/components/Error/500'
export default {
  name: 'NuxtError',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    },
  },
}
</script>
