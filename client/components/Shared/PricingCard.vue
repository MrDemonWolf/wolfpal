<template>
  <div
    class="bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm dark:border-gray-400"
  >
    <div class="p-6">
      <h2
        class="text-lg font-medium leading-6 text-gray-900 dark:text-black font-roboto"
      >
        {{ name }}
      </h2>
      <p class="mt-4 text-sm text-gray-500 dark:text-gray-900 font-montserrat">
        {{ description }}
      </p>
      <p class="mt-8 font-roboto">
        <span class="text-4xl font-extrabold text-gray-900 dark:text-black">{{
          price
        }}</span>
        <span class="text-base font-medium text-gray-500 dark:text-gray-800"
          >/{{ frequency }}</span
        >
      </p>
      <nuxt-link
        :to="ctaLink"
        class="block w-full py-2 mt-8 text-sm font-medium text-center text-white border rounded-md border-primary-500 bg-primary-500 hover:bg-primary-600 hover:border-primary-600 font-roboto"
        >{{ cta }}</nuxt-link
      >
    </div>
    <div class="px-6 pt-6 pb-8">
      <h3
        class="text-xs font-medium tracking-wide text-gray-900 uppercase dark:text-black font-roboto"
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
          <span
            class="text-sm text-gray-500 dark:text-gray-800 font-montserrat"
            >{{ feature }}</span
          >
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
    ctaLink: {
      type: String,
      required: true,
    },
  },
}
</script>
