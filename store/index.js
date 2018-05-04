import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loading: false,
      errorMessage: '',
      auth: null,
      userIsAuthenticated: false
    },
    mutations: {
      setLoading (state, payload) {
        state.loading = payload
      },
      setErrorMessage (state, payload) {
        state.errorMessage = payload
      },
      fetchUser (state, payload) {
        state.auth = payload
        state.userIsAuthenticated = payload || payload.length !== 0
      }
    },
    actions: {
      async nuxtServerInit ({ dispatch }) {
        await dispatch('fetchUser')
      },
      async fetchUser ({ commit }) {
        commit('setLoading', true)
        const res = await this.$axios.$get('/api/current_user')
        commit('fetchUser', res)
        commit('setLoading', false)
      },
      async handleToken ({ dispatch, commit }, payload) {
        commit('setLoading', true)
        const res = await this.$axios.$post('/api/stripe', payload)
        commit('fetchUser', res)
        commit('setLoading', false)
      }
    },
    getters: {
      auth: state => {
        return state.auth
      },
      loading: state => {
        return state.loading
      },
      errorMessage: state => {
        return state.errorMessage
      },
      userIsAuthenticated: state => {
        return state.userIsAuthenticated
      }
    }
  })
}

export default createStore
