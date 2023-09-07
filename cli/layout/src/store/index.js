import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testState: [1, 2, 3]
  },
  getters: {
    getTestState: state => {
      return state.testState
    },
    getTestStateLength: state => {
      return state.testState.length
    }
  },
  mutations: {
    addElementToTestState (state, element) {
      this.state.testState.push(element)
    }
  },
  actions: {
    addElement ({ commit }) {
      commit('addElementToTestState')
    }
  },
  modules: {
  }
})
