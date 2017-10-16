import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import vote from './modules/vote'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    vote   
  }
})
