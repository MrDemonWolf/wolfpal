<template>
  <div class="bg-white dark:bg-gray-800">
    <div
      class="px-4 py-16 mx-auto divide-y-2 divide-gray-200 max-w-7xl sm:py-24 sm:px-6 lg:px-8"
    >
      <h2
        class="text-3xl font-extrabold text-gray-900 font-roboto dark:text-white"
      >
        Frequently asked questions
      </h2>
      <div class="pt-10 mt-6">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12"
        >
          <div v-for="(faq, index) in faqs" :key="index">
            <dt
              class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
            >
              {{ faq.qustion }}
            </dt>
            <dd class="mt-2 text-base text-gray-500 dark:text-gray-200">
              {{ faq.answer }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          qustion: "What's the best thing about Switzerland?",
          answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat`,
        },

        {
          qustion: "What's the best thing about Switzerland?",
          answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat`,
        },
        {
          qustion: "What's the best thing about Switzerland?",
          answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat`,
        },
        {
          qustion: "What's the best thing about Switzerland?",
          answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat`,
        },
        {
          qustion: "What's the best thing about Switzerland?",
          answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat`,
        },
      ],
    }
  },
}
</script>
