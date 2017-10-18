import axios from 'axios'

const state = {
  options: [],
  votes: []
}

const mutations = {
  addOption (state, data) {
    state.options.push(data)
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
  },
  undo (state, voteId) {
    console.log('mutations', voteId)
    state.votes = state.votes.filter(t => t.id !== voteId)
  }
}

const actions = {
  undo ({ commit }, { voteId }) {
    console.log(voteId)
    axios.delete(`http://localhost:3008/votes/${voteId}`)
          .then(
            res => {
              console.log(res.data)
              commit('undo', voteId)
            }
          )
  },
  addOption ({ commit }, { text }) {
    let data = { text }
    axios.post(`http://localhost:3008/options`, data).then(
      res => {
        console.log(res.data)
        commit('addOption', res.data)
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
