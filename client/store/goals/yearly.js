export const state = () => ({
  goals: [],
  messages: {
    success: null,
    error: null,
    errors: {},
  },
})

export const actions = {
  async FETCH_GOALS({ commit }) {
    try {
      const res = await this.$axios.$get('/api/goals/yearly')
      commit('SET_GOALS', res.goals)
    } catch (e) {
      commit('SET_GOALS', [])
      commit('SET_MESSAGE_SUCCESS', null)
      commit('SET_MESSAGE_ERROR', 'Oops.. Something Went Wrong..')
    }
  },
}

export const mutations = {
  SET_GOALS(state, goals) {
    return (state.goals = goals)
  },
  SET_MESSAGE_SUCCESS: (state, success) => {
    return (state.messages.success = success)
  },
  SET_MESSAGE_ERROR: (state, error) => {
    return (state.messages.error = error)
  },
}

export const getters = {
  GOALS: (state) => {
    return state.goals
  },
  MESSAGE_SUCCESS: (state) => {
    return state.messages.success
  },
  MESSAGE_ERROR: (state) => {
    return state.messages.error
  },
}
