export const state = () => ({
  sidebarOpen: false,
})

export const mutations = {
  TOGGLE_SIDEBAR_OPEN(state) {
    return (state.sidebarOpen = !state.sidebarOpen)
  },
  SET_SIDEBAR_OPEN(state, boolean) {
    return (state.sidebarOpen = boolean)
  },
}
export const getters = {
  SIDEBAR_OPEN: (state) => {
    return state.sidebarOpen
  },
}
