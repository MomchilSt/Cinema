import { http } from './httpClient';

const initialState = {
  allCinemas: [],
  allCinemaNames: [],
};

export const actionTypes = {
  createCinema: 'CREATE NEW CINEMA',
  getAllCinemas: 'GET ALL CINEMAS',
  getAllCinemaNames: 'GET ALL CINEMA NAMES'
  };
  
  export const {
    createCinema,
    getAllCinemas,
    getAllCinemaNames
  } = actionTypes;
  
  const getters = {
    allCinemas: (state) => state.allCinemas,
    allCinemaNames: (state) => state.allCinemaNames,
  };

const actions = {
    async [createCinema](_, payload) {
        try {
          await http.post('cinemas', payload);
        } catch (err) {
          console.log(err);
        }
    },
    async [getAllCinemas]({ commit }) {
      try {
       let { data: cinemas } = await http.get('cinemas');
       commit(getAllCinemas, cinemas);
      } catch (err) {
        console.log(err);
      }
     },
     async [getAllCinemaNames]({ commit }) {
      try {
       let { data: cinemas } = await http.get('cinemas');
       commit(getAllCinemaNames, cinemas);
      } catch (err) {
        console.log(err);
      }
     },
}

const mutations = {
    [createCinema](state, payload) {
      Object.assign(state, { allCinemas: payload });
    },
    [getAllCinemas](state, payload) {
      Object.assign(state, { allCinemas: payload });
    },
    [getAllCinemaNames](state, payload) {
      Object.assign(state, { allCinemaNames: payload.map(c => c.name) });
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state: initialState,
}