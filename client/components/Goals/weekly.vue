<template>
  <div
    class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Todo List</h1>
        <form class="flex mt-4" @submit.prevent="addGoal">
          <input
            v-model="newGoal.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-900"
            placeholder="Add Todo"
          />
          <button
            class="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
          >
            Add
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
            {{ goal.name }}
          </p>
          <button
            v-show="!goal.isCompleted"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
          >
            Done
          </button>
          <button
            class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
            @click="removeGoal(index)"
          >
            Remove
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
      required: true,
    },
  },
  data() {
    return {
      newGoal: { name: '', isCompleted: false },
    }
  },
  methods: {
    addGoal(e) {
      if (this.newGoal.name.length > 0) {
        this.goals.push(this.newGoal)
        this.newGoal = { name: '', isCompleted: false }
      }
    },
    removeGoal(index, e) {
      this.$delete(this.goals, index)
    },
  },
}
</script>
