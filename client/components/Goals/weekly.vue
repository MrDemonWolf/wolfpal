<template>
  <div class="h-100 w-full flex items-center justify-center font-roboto">
    <div
      class="bg-white dark:bg-gray-300 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg"
    >
      <div class="mb-4">
        <h1 class="text-primary-900 font-extrabold text-xl text-center">
          Weekly Goals
        </h1>
        <form class="flex mt-4" @submit.prevent="addGoal">
          <input
            v-model="newGoal.title"
            class="shadow appearance-none focus:outline-none rounded w-full py-2 px-3 mr-4 text-grey-900"
            placeholder="Add new goal"
          />
          <button
            class="flex-no-shrink p-2 border-2 rounded text-primary-500 border-primary-500 hover:text-white hover:bg-primary-500"
          >
            <fa
              :icon="['fas', 'plus']"
              width="1.5rem"
              height="1.5rem"
              class="ml-1 mr-1"
            />
          </button>
        </form>
      </div>
      <div v-for="(goal, index) in goals" :key="index">
        <div class="flex mb-4 items-center">
          <p
            :class="
              goal.isCompleted ? 'text-green-500 line-through' : 'text-grey-900'
            "
            class="w-full"
          >
            {{ goal.title }}
          </p>
          <button
            v-show="!goal.isCompleted"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
            @click="toggleCompleteGoal(index)"
          >
            Done
          </button>
          <button
            class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
            @click="removeGoal(index)"
          >
            <fa
              :icon="['fas', 'trash']"
              width="1.5rem"
              height="1.5rem"
              class="ml-1 mr-1"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goals: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newGoal: { title: '', isCompleted: false },
    }
  },
  methods: {
    async addGoal(e) {
      if (this.newGoal.title.length > 0) {
        try {
          const response = await this.$axios.post(
            '/api/goals/weekly',
            this.newGoal
          )
          this.goals.push(response.data.weeklyGoal)
          this.newGoal = { title: '', isCompleted: false }
        } catch (err) {
          this.newGoal = { title: '', isCompleted: false }
          console.log(err)
        }
      }
    },
    async removeGoal(index, e) {
      try {
        await this.$axios.delete(`/api/goals/weekly/${this.goals[index]._id}`)
        this.$delete(this.goals, index)
      } catch (err) {
        console.log(err)
      }
    },
    async toggleCompleteGoal(index, e) {
      try {
        await this.$axios.put(
          `/api/goals/weekly/${this.goals[index]._id}/complete`
        )
        this.goals[index].isCompleted = true
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
