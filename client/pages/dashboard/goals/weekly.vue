<template>
  <div class="container mx-auto">
    <WeeklyGoals :goals="weeklyGoals" />
  </div>
</template>

<script>
import WeeklyGoals from '@/components/Goals/Weekly'

export default {
  components: {
    WeeklyGoals,
  },

  layout: 'dashboard',

  middleware: ['auth'],

  async fetch({ store }) {
    await store.dispatch('goals/FETCH_WEEKLY_GOALS')
  },

  head() {
    return {
      title: 'Weekly Goals',
    }
  },

  computed: {
    weeklyGoals() {
      return this.$store.state.goals.weekly
    },
  },
}
</script>
