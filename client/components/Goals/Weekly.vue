<template>
  <div class="px-6 py-2 rounded shadow bg-gray-50 dark:bg-gray-200">
    <div class="mb-4">
      <form class="flex mt-4" @submit.prevent="addGoal">
        <input
          v-model="newGoal.title"
          aria-label="Add a new goal"
          name="newGoalTitle"
          type="text"
          class="w-full px-3 py-2 mr-4 rounded shadow appearance-none focus:outline-none text-grey-900"
          placeholder="Add new goal"
          novalidate
        />
        <button
          type="submit"
          class="p-2 border-2 rounded flex-no-shrink text-primary-500 border-primary-500 hover:text-white hover:bg-primary-500"
        >
          <fa
            :icon="['fas', 'plus']"
            class="w-6 h-6 ml-1 mr-1 text-2xl align-middle"
          />
        </button>
      </form>
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
            'border-gray-400 dark:border-gray-500': !goal.isCompleted,
          }"
          class="p-2 ml-4 mr-2 text-green-500 border-2 rounded flex-no-shrink hover:text-white hover:bg-green-500 hover:border-green-500 dark-hover:border-green-500 toggle-complete-goal focus:outline-none"
          @click="
            goal.isCompleted
              ? markGoalNotComplete(index)
              : markGoalComplete(index)
          "
        >
          <fa
            :class="{ invisible: !goal.isCompleted }"
            :icon="['fas', 'check']"
            class="w-6 h-6 ml-1 mr-1 text-2xl align-middle"
          />
        </button>

        <button
          class="p-2 ml-2 text-red-500 border-2 border-red-500 rounded flex-no-shrink hover:text-white hover:bg-red-500 focus:outline-none"
          @click="removeGoal(index)"
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
      default: () => [],
    },
  },
  data() {
    return {
      newGoal: { title: '', isCompleted: false },
    }
  },
  methods: {
    async addGoal() {
      try {
        await this.$store.dispatch('goals/ADD_WEEKLY_GOAL', this.newGoal)
        if (this.$store.state.goals.messages.success) {
          this.newGoal.title = ''
          this.newGoal.isCompleted = false
          return this.$toast.success(this.$store.state.goals.messages.success, {
            position: 'bottom-right',
          })
        }
        if (this.$store.state.goals.messages.error) {
          return this.$toast.error(this.$store.state.goals.messages.error, {
            position: 'bottom-right',
          })
        }
        if (this.$store.state.goals.messages.errors) {
          const { title } = this.$store.state.goals.messages.errors
          if (title) {
            return this.$toast.error(title, {
              position: 'bottom-right',
            })
          }
        }
      } catch (e) {
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
    async removeGoal(index) {
      try {
        await this.$store.dispatch('goals/REMOVE_WEEKLY_GOAL', index)

        if (this.$store.state.goals.messages.success) {
          return this.$toast.success(this.$store.state.goals.messages.success, {
            position: 'bottom-right',
          })
        }
        this.$toast.error(this.$store.state.goals.messages.error, {
          position: 'bottom-right',
        })
      } catch (e) {
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
    async markGoalComplete(index) {
      try {
        await this.$store.dispatch('goals/MODIFY_GOAL_IS_COMPLETE', index)
        if (this.$store.state.goals.messages.success) {
          this.$toast.success(this.$store.state.goals.messages.success, {
            position: 'bottom-right',
          })
        }
        this.$toast.error(this.$store.state.goals.messages.error, {
          position: 'bottom-right',
        })
      } catch (e) {
        this.$toast.error('Oops.. Something Went Wrong..', {
          position: 'bottom-right',
        })
      }
    },
    async markGoalNotComplete(index) {
      try {
        await this.$store.dispatch('goals/MODIFY_GOAL_IS_NOT_COMPLETE', index)
        if (this.$store.state.goals.messages.success) {
          this.$toast.success(this.$store.state.goals.messages.success, {
            position: 'bottom-right',
          })
        }
        this.$toast.error(this.$store.state.goals.messages.error, {
          position: 'bottom-right',
        })
      } catch (e) {
        this.$toast.error('Oops.. Something Went Wrong..', {
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
