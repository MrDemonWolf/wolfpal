export const state = () => ({
  weekly: [],
  messages: {
    error: undefined,
    success: undefined,
  },
})

export const actions = {
  async FETCH_WEEKLY_GOALS({ commit }) {
    const response = await this.$axios.get('/api/goals/weekly')
    commit('SET_WEEKLY_GOALS', response.data.goals)
  },
  async MODIFY_GOAL_IS_COMPLETE({ state, commit }, index) {
    const response = await this.$axios.put(
      `/api/goals/weekly/${state.weekly[index]._id}/complete`
    )
    commit('SET_GOAL_IS_COMPLETE', {
      index,
      isCompleted: response.data.isCompleted,
    })
  },
  async REMOVE_WEEKLY_GOAL({ state, commit }, index) {
    try {
      const response = await this.$axios.delete(
        `/api/goals/weekly/${state.weekly[index]._id}`
      )
      commit('SET_MESSAGE_SUCCESS', response.data.message)
      commit('DELETE_WEEKLY_GOAL', index)
    } catch (e) {
      commit('SET_MESSAGE_ERROR', e.data.error)
    }
  },
}

export const mutations = {
  SET_WEEKLY_GOALS(state, goals) {
    return (state.weekly = goals)
  },

  SET_GOAL_IS_COMPLETE(state, { index, isCompleted }) {
    return (state.weekly[index].isCompleted = isCompleted)
  },

  DELETE_WEEKLY_GOAL: (state, index) => {
    return state.weekly.splice(index, 1)
  },
  SET_MESSAGE_ERROR: (state, error) => {
    return (state.messages.error = error)
  },
  SET_MESSAGE_SUCCESS: (state, success) => {
    return (state.messages.success = success)
  },
}

export const getters = {
  WEEKLY_GOALS: (state) => {
    return state.weeky
  },
}
