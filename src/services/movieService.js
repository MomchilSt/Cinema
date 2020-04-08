import { http } from './httpClient';

const initialState = {
    allMovies: [],
};

export const actionTypes = {
  getAllMovies: 'GET ALL MOVIES SUCCESS',
  createMovie: 'CREATE NEW MOVIE SUCCESS',
  };
  
  export const {
    createMovie,
    getAllMovies
  } = actionTypes;
  
  const getters = {
    allMovies: (state) => state.allMovies,
  };

const actions = {
  async [getAllMovies]({ commit }) {
   try {
    let { data: movies } = await http.get('movies');
    commit(getAllMovies, movies);
   } catch (err) {
     console.log(err)
   }
  },
    async [createMovie](_, payload) {
        try {
          await http.post('movies', payload);
        } catch (err) {
          console.log(err)
        }
      },
      
}

const mutations = {
  [getAllMovies](state, payload) {
    Object.assign(state, { allMovies: payload });
  },
  [createMovie](state, payload) {
    Object.assign(state, { allMovies: payload });
  },
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state: initialState,
}