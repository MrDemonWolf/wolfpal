<template>
  <div
    class="border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm dark:bg-gray-500 dark:border-gray-400"
  >
    <div class="p-6">
      <h2 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
        {{ name }}
      </h2>
      <p class="mt-4 text-sm text-gray-500 dark:text-gray-200">
        {{ description }}
      </p>
      <p class="mt-8">
        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">{{
          price
        }}</span>
        <span class="text-base font-medium text-gray-500 dark:text-gray-200"
          >/{{ frequency }}</span
        >
      </p>
      <a
        href="#top"
        class="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-gray-800 border border-gray-800 rounded-md dark:border-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:hover:border-primary-600 hover:bg-gray-900"
        >Get Started</a
      >
    </div>
    <div class="px-6 pt-6 pb-8">
      <h3
        class="text-xs font-medium tracking-wide text-gray-900 uppercase dark:text-white"
      >
        What's included
      </h3>
      <ul class="mt-6 space-y-4">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex space-x-3"
        >
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-300"
            x-description="Heroicon name: solid/check"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-sm text-gray-500 dark:text-white">{{
            feature
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      default: '',
    },
    features: {
      type: Array,
      required: true,
    },
    cta: {
      type: String,
      required: true,
    },
  },
}
</script>
