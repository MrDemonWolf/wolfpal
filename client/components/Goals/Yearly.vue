<template>
  <div class="px-6 py-2 rounded shadow bg-gray-50 dark:bg-gray-200">
    <div
      v-if="goals.length === 0"
      class="flex flex-wrap items-center justify-between"
    >
      <div class="flex items-center flex-1 w-0">
        <fa
          :icon="['fas', 'exclamation-triangle']"
          class="mr-3 text-xl align-middle text-primary-800"
        />
        <span
          class="ml-3 text-base font-medium text-white dark:text-gray-900 font-roboto"
        >
          Uh oh looks like you have not made any yearly goals yet.
        </span>
      </div>
      <div
        class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto"
      >
        <a
          href="#"
          class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Create
        </a>
      </div>
    </div>
    <div v-for="(goal, index) in goals" :key="index">
      <div class="flex items-center mb-4">
        <p
          :class="{ 'text-green-500 dark:text-green-400': goal.isCompleted }"
          class="w-full text-xl font-medium leading-5 text-gray-900 break-all font-montserrat"
        >
          {{ goal.title }}
        </p>
        <button
          :class="{
            'border-green-500': goal.isCompleted,
            'border-gray-400 dark:border-gray-500': !goal.isCompleted
          }"
          class="p-2 ml-4 mr-2 text-green-500 border-2 rounded flex-no-shrink hover:text-white hover:bg-green-500 hover:border-green-500 dark-hover:border-green-500 toggle-complete-goal focus:outline-none"
        >
          <fa
            :class="{ invisible: !goal.isCompleted }"
            :icon="['fas', 'check']"
            class="w-6 h-6 ml-1 mr-1 text-2xl align-middle"
          />
        </button>

        <button
          class="p-2 ml-2 text-red-500 border-2 border-red-500 rounded flex-no-shrink hover:text-white hover:bg-red-500 focus:outline-none"
        >
          <fa
            :icon="['fas', 'trash']"
            class="w-6 h-6 ml-1 mr-1 text-xl align-middle"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goals: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.toggle-complete-goal:hover svg {
  visibility: visible !important;
}
</style>
