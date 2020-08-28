<template>
  <div
    :class="
      type === 'success'
        ? 'bg-green-200 text-green-800'
        : type === 'error'
        ? 'bg-red-200 text-red-800'
        : ' '
    "
    class="font-light p-4 rounded mb-4"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
}
</script>
