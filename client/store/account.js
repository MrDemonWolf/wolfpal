export const state = () => ({
  showTwoFactorModal: false,
  twoFactorQrCode: '',
  twoFactorSecret: '',
  twofactorBackupCodes: [],
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
      // commit('SET_MESSAGE_ERROR', undefined)
    } catch (e) {
      console.log(e)
      // commit('SET_MESSAGE_SUCCESS', undefined)
      // commit('SET_MESSAGE_ERROR', e.response.data.error)
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
}

export const getters = {
  TWO_FACTOR_BACKUP_CODES: (state) => {
    return state.twoFactorBackupCodes
  },
}
