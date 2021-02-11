<template>
  <div class="bg-white">
    <div class="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
          Pricing Plans
        </h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">
          Start completing more of your goals for free, then start paying
          monthly or yearly to unlock additional features.
        </p>
        <div
          class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8"
        >
          <button
            type="button"
            :class="
              monthlyBilling
                ? 'relative w-1/2 py-2 text-sm font-medium text-gray-700 bg-white border-gray-200 rounded-md shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
                : 'ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
            "
            @click="toggleBilling"
          >
            Monthly billing
          </button>

          <button
            type="button"
            :class="
              monthlyBilling
                ? 'ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
                : 'relative w-1/2 py-2 text-sm font-medium text-gray-700 bg-white border-gray-200 rounded-md shadow-sm whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8'
            "
            @click="toggleBilling"
          >
            Yearly billing
          </button>
        </div>
      </div>
      <MonthlyPricing v-if="monthlyBilling" />
      <YearlyPricing v-else />
    </div>
  </div>
</template>

<script>
import MonthlyPricing from '@/components/Landing/Pricing/Monthly'
import YearlyPricing from '@/components/Landing/Pricing/Yearly'

export default {
  components: {
    MonthlyPricing,
    YearlyPricing,
  },
  data() {
    return {
      monthlyBilling: true,
    }
  },

  methods: {
    toggleBilling() {
      this.monthlyBilling = !this.monthlyBilling
    },
  },
}
</script>
