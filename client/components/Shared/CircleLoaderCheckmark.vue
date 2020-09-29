<template>
  <div
    class="circle-loader mb-12 border-6 border-solid border-black border-opacity-25 border-l-green-400 relative inline-block align-top w-28 h-28"
    :class="{ 'load-complete border-green-400 border-opacity-100': loading }"
  >
    <div
      class="checkmark draw"
      :class="{ block: loading, hidden: !loading }"
    ></div>
  </div>
</template>
<style lang="postcss" scoped>
.circle-loader {
  animation: loader-spin 1.2s infinite linear;
  border-radius: 50%;
}

.load-complete {
  animation: none;
  transition: border 500ms ease-out;
}
.checkmark:after {
  @apply h-13 w-5 border-r-6 border-r-solid border-r-green-400 border-t-6 border-t-solid border-t-green-400 left-7 top-14 absolute opacity-100;
  transform-origin: left top;
  content: '';
}

.checkmark.draw:after {
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-name: checkmark;
  transform: scaleX(-1) rotate(135deg);
}
@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 1.75em;
    opacity: 1;
  }
  40% {
    height: 3.5em;
    width: 1.75em;
    opacity: 1;
  }
  100% {
    height: 3.5em;
    width: 1.75em;
    opacity: 1;
  }
}
</style>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
