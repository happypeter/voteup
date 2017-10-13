const state = {
  isAuthenticated: false,
  currentUser: ''
}

const mutations = {
  login (state, { username }) {
    state.isAuthenticated = true
    state.currentUser = username
  }
}
export default {
  state,
  mutations
}
