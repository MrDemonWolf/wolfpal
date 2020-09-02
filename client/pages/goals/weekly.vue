<template>
  <div>
    <WeeklyGoals :goals="goals" />
  </div>
</template>

<script>
import WeeklyGoals from '@/components/Goals/weekly'
export default {
  components: {
    WeeklyGoals,
  },
  async asyncData({ error, $axios, $auth, store }) {
    const { data } = await $axios.get('/api/goals/weekly').catch((err) => {
      error({ statusCode: 400, message: err.error })
    })
    return { goals: data.goals }
  },
}
</script>
