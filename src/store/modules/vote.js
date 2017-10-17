import axios from 'axios'

const state = {
  options: [],
  votes: [
    {
      voter: 'happypeter',
      optionId: '2'
    },
    {
      voter: 'billie',
      optionId: '3'
    }
  ]
}

const mutations = {
  addOption (state, text) {
    state.options.push({ text })
  },
  loadOptions (state, data) {
    state.options = data.options
  },
  voteup (state, { vote }) {
    console.log('mutaion', vote)
    state.votes.push(vote)
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
  },
  voteup ({ commit }, vote ) {
    console.log('action', vote)
    commit('voteup', vote)
  }
}

export default {
  state,
  mutations,
  actions
}
