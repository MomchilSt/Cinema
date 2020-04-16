import { http } from './httpClient';

const initialState = {
    allTickets: [],
};

export const actionTypes = {
  buyTicket: 'BUY TICKET',
  getAllTickets: 'GET ALL TICKETS',
};
  
  export const {
    buyTicket,
    getAllTickets
  } = actionTypes;
  
  const getters = {
    allTickets: (state) => state.allTickets,
  };

const actions = {
  async [buyTicket](_, payload) {
    try {
      await http.post('tickets', payload);
    } catch (err) {
      console.log(err)
    }
},
async [getAllTickets]({ commit }) {
    try {
     let { data: tickets } = await http.get('tickets');
     commit(getAllTickets, tickets);
    } catch (err) {
      console.log(err)
    }
   },
}

const mutations = {
  [buyTicket](state, payload) {
    Object.assign(state, { allTickets: payload.filter(t => t.ownerId == JSON.parse(localStorage.getItem('userInfo'))._id) });
  },
  [getAllTickets](state, payload) {
    Object.assign(state, { allTickets: payload.filter(t => t.ownerId == JSON.parse(localStorage.getItem('userInfo'))._id) });
  },
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state: initialState,
}