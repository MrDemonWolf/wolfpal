export const state = () => ({
  showTwoFactorModal: false,
  twoFactorQrCode: '',
  twoFactorSecret: '',
  twofactorBackupCodes: [],
  messages: {
    success: undefined,
    error: undefined,
  },
})

export const actions = {
  TOGGLE_SHOW_TWO_FACTOR_MODAL({ state, commit }) {
    commit('SET_SHOW_TWO_FACTOR_MODAL', !state.showTwoFactorModal)
  },
  async SET_TWO_FACTOR_INITIALIZE({ commit }) {
    try {
      const res = await this.$axios.post('/api/account/two-factor')
      commit('SET_TWO_FACTOR_QR_CODE', res.data.qrCode)
      commit('SET_TWO_FACTOR_SECRET', res.data.secret)

      commit('SET_TWO_FACTOR_BACKUP_CODES', res.data.backupCodes)
      commit('SET_MESSAGE_ERROR', undefined)
    } catch (e) {
      commit('SET_MESSAGE_SUCCESS', undefined)
      commit('SET_MESSAGE_ERROR', e.response.data.error)
    }
  },
  async ENABLE_TWO_FACTOR({ commit }, code) {
    try {
      const res = await this.$axios.put('/api/account/two-factor', {
        code,
      })

      commit('SET_SHOW_TWO_FACTOR_MODAL', false)
      commit('SET_MESSAGE_ERROR', undefined)
      commit('SET_MESSAGE_SUCCESS', res.data.message)
    } catch (e) {
      commit('SET_MESSAGE_SUCCESS', undefined)
      commit('SET_MESSAGE_ERROR', e.response.data.error)
    }
  },
  RESET_TWO_FACTOR_INITIALIZE({ commit }) {
    commit('SET_TWO_FACTOR_QR_CODE', '')
    commit('SET_TWO_FACTOR_SECRET', '')
    commit('SET_TWO_FACTOR_BACKUP_CODES', [])
  },
}

export const mutations = {
  SET_SHOW_TWO_FACTOR_MODAL(state, status) {
    return (state.showTwoFactorModal = status)
  },
  SET_TWO_FACTOR_QR_CODE(state, qrCode) {
    return (state.twoFactorQrCode = qrCode)
  },
  SET_TWO_FACTOR_SECRET(state, secret) {
    return (state.twoFactorSecret = secret)
  },
  SET_TWO_FACTOR_BACKUP_CODES(state, codes) {
    return (state.twoFactorBackupCodes = codes)
  },
  SET_MESSAGE_SUCCESS: (state, success) => {
    return (state.messages.success = success)
  },
  SET_MESSAGE_ERROR: (state, error) => {
    return (state.messages.error = error)
  },
}

export const getters = {
  SHOW_TWO_FACTOR_MODAL: (state) => {
    return state.showTwoFactorModal
  },
  TWO_FACTOR_QR_CODE: (state) => {
    return state.twoFactorQrCode
  },
  TWO_FACTOR_SECRET: (state) => {
    return state.twoFactorSecret
  },
  TWO_FACTOR_BACKUP_CODES: (state) => {
    return state.twoFactorBackupCodes
  },
  MESSAGE_SUCCESS: (state) => {
    return state.messages.success
  },
  MESSAGE_ERROR: (state) => {
    return state.messages.error
  },
}
