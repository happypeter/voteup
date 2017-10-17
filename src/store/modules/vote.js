import axios from 'axios'

const state = {
  options: [],
  votes: []
}

const mutations = {
  addOption (state, text) {
    state.options.push({ text })
  },
  loadOptions (state, data) {
    state.options = data.options
  },
  loadVotes (state, { votes }) {
    state.votes = votes
  },
  voteup (state, vote) {
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
  loadVotes ({ commit }) {
    axios.get(`http://localhost:3008/votes`).then(
      res => {
        console.log(res.data)
        commit('loadVotes', { votes: res.data })
      }
    )
  },
  voteup ({ commit }, { vote } ) {
    console.log('action', vote)
    axios.post('http://localhost:3008/votes', vote)
    .then(
      res => {
        console.log(res.data)
        commit('voteup', res.data)
      }
    )
  }
}

export default {
  state,
  mutations,
  actions
}
