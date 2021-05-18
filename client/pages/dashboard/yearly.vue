<template>
  <div class="container mx-auto">
    <GoalsYearly :goals="yearlyGoals" />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',

  middleware: ['auth'],

  async fetch({ store }) {
    await store.dispatch('goals/yearly/FETCH_GOALS')
  },

  head() {
    return {
      title: 'Yearly Goals',
    }
  },

  computed: {
    yearlyGoals() {
      return this.$store.state.goals.yearly.goals
    },
  },
}
</script>
