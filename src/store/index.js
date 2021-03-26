// Dependencies
import Vue from 'vue'
import Vuex from 'vuex'

// Store modules
import modules from './modules'

// Vue use vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  actions: {
    reset({commit}) {
      Object.keys(modules).forEach(moduleName => {
        commit(`${moduleName}/RESET`);
      })
    }
  }
})
