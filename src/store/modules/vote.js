import axios from 'axios'

const state = {
  options: [
    {
      text: '鱼香肉丝',
      id: 'we34s'
    },
    {
      text: '宫保鸡丁',
      id: 'res76'
    }
  ],
  votes: [
    {
      voter: 'peter',
      optionId: 'res76',
      id: 'wes32'
    },
    {
      voter: 'billie',
      optionId: 'res76',
      id: '432de'
    }
  ]
}

const mutations = {
  addOption (state, data) {
    state.options.push(data)
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
