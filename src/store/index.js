import Vue from 'vue'
import Vuex from 'vuex'
import authService from '../services/authService'
import movieService from '../services/movieService'
import cinemaService from '../services/cinemaService'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authService,
    movieService,
    cinemaService
  }
})
