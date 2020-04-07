import { http } from './httpClient';

const initialState = {
    allMovies: [],
};

export const actionTypes = {
  createMovie: 'CREATE NEW MOVIE SUCCESS',
  };
  
  export const {
    createMovie,
  } = actionTypes;
  
  const getters = {
    allMovies: (state) => state.allMovies,
  };

const actions = {
    async [createMovie](_, payload) {
        try {
          await http.post('movies', payload);
          //toastSuccess('Successfully create student!');
        } catch (err) {
          console.log(err)
        }
      },
}

const mutations = {
      [createMovie](state, payload) {
          Object.assign(state, { allMovies: payload }); // { allMovies: payload }
    },
}

export default {
    getters,
    mutations,
    actions,
    state: initialState,
}