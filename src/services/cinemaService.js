import { http } from './httpClient';

const initialState = {
    allCinemas: [],
};

export const actionTypes = {
  createCinema: 'CREATE NEW CINEMA SUCCESS',
  };
  
  export const {
    createCinema,
  } = actionTypes;
  
  const getters = {
    allCinemas: (state) => state.allCinemas,
  };

const actions = {
    async [createCinema](_, payload) {
        try {
          await http.post('cinemas', payload);
          //toastSuccess('Successfully create student!');
        } catch (err) {
          console.log(err)
        }
      },
}

const mutations = {
      [createCinema](state, payload) {
          Object.assign(state, { allCinemas: payload }); // { allMovies: payload }
    },
}

export default {
    getters,
    mutations,
    actions,
    state: initialState,
}