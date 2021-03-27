import axios from 'axios'

// Initial state
const initialState = () => ({
  api: [],
})

// State object
const state = initialState()

// Getters
const getters = {
  getApi(state) {
    return state.api
  },
}

// Actions
const actions = {
	clearState({ commit }) { commit('RESET') },
  loadApi({ commit }) {
    axios.get(`https://6059fb9db11aba001745d43f.mockapi.io/api/v1/cards`)
      .then(response => {
        console.log(response.data);
        commit('setApi', response.data)
      })
  },
}

// Mutations
const mutations = {
  RESET(state) {
    const newState = initialState()
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  },
  setApi(state, data) {
    state.api = data
  },
}

// Module exports
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
