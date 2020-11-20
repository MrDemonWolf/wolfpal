<template>
  <div class="container w-full mx-auto lg:w-3/5">
    <WeeklyGoals :goals="weeklyGoals" />
  </div>
</template>

<script>
import WeeklyGoals from '@/components/Goals/weekly'

export default {
  components: {
    WeeklyGoals,
  },
  middleware: 'auth',

  async fetch({ store }) {
    await store.dispatch('goals/FETCH_WEEKLY_GOALS')
  },

  computed: {
    weeklyGoals() {
      return this.$store.state.goals.weekly
    },
  },
}
</script>
