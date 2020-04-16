import { http } from './httpClient';

const initialState = {
    allMovies: [],
    movie: {
      _id: null,
    }
};

export const actionTypes = {
  getAllMovies: 'GET ALL MOVIES',
  createMovie: 'CREATE NEW MOVIE',
  removeMovie: 'REMOVE MOVIE',
  buyTicket: 'BUY TICKET',
  editMovie: 'EDIT MOVIE'
};
  
  export const {
    createMovie,
    getAllMovies,
    buyTicket,
    removeMovie,
    editMovie
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
  async [buyTicket](_, payload) {
    try {
      await http.post('tickets', payload);
    } catch (err) {
      console.log(err)
    }
  },
  async [removeMovie]( _, payload,) {
    try {
      const { id } = payload;
      await http.delete(`movies/${id}`);
    } catch (err) {
      console.log(err);
    }
  },
  async [editMovie](_, payload) {
    try {
      await http.put(`movies/${payload._id}`, payload);
    } catch (err) {
      console.log(err);
    }
  }
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