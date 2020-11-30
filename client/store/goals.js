export const state = () => ({
  weekly: [],
  messages: {
    success: undefined,
    error: undefined,
  },
})

export const actions = {
  async FETCH_WEEKLY_GOALS({ commit }) {
    const res = await this.$axios.get('/api/goals/weekly')
    commit('SET_WEEKLY_GOALS', res.data.goals)
  },
  async MODIFY_GOAL_IS_COMPLETE({ state, commit }, index) {
    try {
      const res = await this.$axios.put(
        `/api/goals/weekly/${state.weekly[index]._id}/complete`
      )
      commit('SET_GOAL_IS_COMPLETE', {
        index,
        isCompleted: res.data.isCompleted,
      })
      commit('SET_MESSAGE_ERROR', undefined)
    } catch (e) {
      commit('SET_MESSAGE_SUCCESS', undefined)
      commit('SET_MESSAGE_ERROR', e.response.data.error)
    }
  },
  async REMOVE_WEEKLY_GOAL({ state, commit }, index) {
    try {
      const res = await this.$axios.delete(
        `/api/goals/weekly/${state.weekly[index]._id}`
      )
      commit('SET_MESSAGE_ERROR', undefined)
      commit('SET_MESSAGE_SUCCESS', res.data.message)
      commit('DELETE_WEEKLY_GOAL', index)
    } catch (e) {
      commit('SET_MESSAGE_SUCCESS', undefined)
      commit('SET_MESSAGE_ERROR', e.response.data.error)
    }
  },
  async ADD_WEEKLY_GOAL({ commit }, goal) {
    try {
      const res = await this.$axios.post('/api/goals/weekly', goal)
      commit('SET_MESSAGE_ERROR', undefined)
      commit('SET_MESSAGE_SUCCESS', res.data.message)
      commit('PUSH_WEEKLY_GOAL', res.data.goal)
    } catch (e) {
      commit('SET_MESSAGE_SUCCESS', undefined)
      commit('SET_MESSAGE_ERROR', e.response.data.error)
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
  PUSH_WEEKLY_GOAL: (state, goal) => {
    return state.weekly.push(goal)
  },
  SET_MESSAGE_SUCCESS: (state, success) => {
    return (state.messages.success = success)
  },
  SET_MESSAGE_ERROR: (state, error) => {
    return (state.messages.error = error)
  },
}

export const getters = {
  WEEKLY_GOALS: (state) => {
    return state.weeky
  },
  MESSAGE_SUCCESS: (state) => {
    return state.messages.success
  },
  MESSAGE_ERROR: (state) => {
    return state.messages.error
  },
}
