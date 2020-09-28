<template>
  <div class="bg-white dark:bg-gray-200 rounded shadow p-6 m-4">
    <h1 class="text-primary-900 font-extrabold text-2xl text-center">
      Weekly Goals
    </h1>
    <Alert v-if="error" type="danger" :message="error" class="mt-4 mb-4" />
    <Alert v-if="success" type="success" :message="success" class="mt-4 mb-4" />
    <div class="mb-4">
      <form class="flex mt-4" @submit.prevent="addGoal">
        <input
          v-model="newGoal.title"
          aria-label="Add a new goal"
          name="newGoalTitle"
          type="text"
          class="shadow appearance-none focus:outline-none rounded w-full py-2 px-3 mr-4 text-grey-900"
          placeholder="Add new goal"
          novalidate
        />
        <button
          type="submit"
          class="flex-no-shrink p-2 border-2 rounded text-primary-500 border-primary-500 hover:text-white hover:bg-primary-500"
        >
          <fa
            :icon="['fas', 'plus']"
            class="ml-1 mr-1 h-6 w-6 text-2xl align-middle"
          />
        </button>
      </form>
    </div>
    <div v-for="(goal, index) in goals" :key="index">
      <div class="flex mb-4 items-center">
        <p
          :class="{ 'text-green-500 dark:text-green-900': goal.isCompleted }"
          class="w-full text-gray-900 text-lg"
        >
          {{ goal.title }}
        </p>
        <button
          :class="{
            'border-green-500': goal.isCompleted,
            'border-gray-600 dark:border-gray-700': !goal.isCompleted,
          }"
          class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 hover:bg-green-500 hover:border-green-500 dark-hover:border-green-500 toggle-complete-goal focus:outline-none"
          @click="toggleCompleteGoal(index)"
        >
          <fa
            :class="{ invisible: !goal.isCompleted }"
            :icon="['fas', 'check']"
            class="ml-1 mr-1 h-6 w-6 text-2xl align-middle"
          />
        </button>

        <button
          class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 focus:outline-none"
          @click="removeGoal(index)"
        >
          <fa
            :icon="['fas', 'trash']"
            class="ml-1 mr-1 h-6 w-6 text-xl align-middle"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Shared/Alert'

export default {
  loading: false,
  components: { Alert },
  props: {
    goals: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newGoal: { title: '', isCompleted: false },
      error: null,
      success: null,
    }
  },
  methods: {
    async addGoal(e) {
      try {
        const response = await this.$axios.post(
          '/api/goals/weekly',
          this.newGoal
        )
        this.goals.push(response.data.weeklyGoal)
        this.newGoal = { title: '', isCompleted: false }
        this.$toast.success(response.data.message, {
          position: 'bottom-right',
        })
      } catch (e) {
        if (!e.response) {
          return this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }
        this.$toast.error('Goal is required.', {
          position: 'bottom-right',
        })
      }
    },
    async removeGoal(index, e) {
      try {
        const response = await this.$axios.delete(
          `/api/goals/weekly/${this.goals[index]._id}`
        )
        this.$delete(this.goals, index)
        this.$toast.success(response.data.message, {
          position: 'bottom-right',
        })
      } catch (e) {
        if (!e.response) {
          return this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }
        this.$toast.error(e.response.data.error, {
          position: 'bottom-right',
        })
      }
    },
    async toggleCompleteGoal(index, e) {
      try {
        const response = await this.$axios.put(
          `/api/goals/weekly/${this.goals[index]._id}/complete`
        )
        this.goals[index].isCompleted = response.data.isCompleted
        this.$toast.success(
          `Goal has been marked as ${
            response.data.isCompleted ? 'completed' : 'not completed'
          }`,
          {
            position: 'bottom-right',
          }
        )
      } catch (e) {
        if (!e.response) {
          return this.$toast.error('Oops.. Something Went Wrong..', {
            position: 'bottom-right',
          })
        }
        this.$toast.error(e.response.data.error, {
          position: 'bottom-right',
        })
      }
    },
  },
}
</script>

<style scoped>
.toggle-complete-goal:hover svg {
  visibility: visible !important;
}
</style>
