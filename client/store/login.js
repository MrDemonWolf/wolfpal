export const state = () => ({
  twoFactorToken: undefined,
})

export const actions = {}

export const mutations = {
  SET_TWO_FACTOR_TOKEN(state, twoFactorToken) {
    return (state.twoFactorToken = twoFactorToken)
  },
}
export const getters = {
  TWO_FACTOR_TOKEN: (state) => {
    return state.twoFactorToken
  },
}
