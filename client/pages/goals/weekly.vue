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
  data() {
    return {
      goals: [
        { name: 'Pick up friend from airport.', isCompleted: true },
        { name: 'Cook Dinner for friend', isCompleted: false },
        { name: 'Go to bed around 9pm', isCompleted: false },
      ],
    }
  },
}
</script>
