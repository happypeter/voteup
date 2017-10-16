import axios from 'axios'

const state = {
  options: []
}

const mutations = {
  addOption (state, text) {
    state.options.push({ text })
  },
  loadOptions (state, data) {
    state.options = data.options
  }
}

const actions = {
  addOption ({ commit }, { text }) {
    let data = { text }
    axios.post(`http://localhost:3008/options`, data).then(
      res => {
        commit('addOption', text)
      }
    )
  },
  loadOptions ({ commit }) {
    axios.get(`http://localhost:3008/options`).then(
      res => {
        console.log(res.data)
        commit('loadOptions', { options: res.data })
      }
    )
  }
}

export default {
  state,
  mutations,
  actions
}
