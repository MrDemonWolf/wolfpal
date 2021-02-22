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
          qustion: 'What happens after the 30 day free trial?',
          answer: `You will lose access to must of the app and be limited to 15 weekly goals a week.  All notifications will no longer send to give you ratios and reminders`,
        },

        {
          qustion: 'How mamy users do I have to buy to have enterpise?',
          answer: `Enterprise requires you to buy 5 users minimum due to the lower price.`,
        },
        {
          qustion: 'What payment methods do you account?',
          answer: `We accept all major credit cards.`,
        },
      ],
    }
  },
}
</script>
