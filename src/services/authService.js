import { http } from '../services/httpClient';
const initialState = {
  isAuth: localStorage.getItem('authtoken') !== null,
  authtoken: localStorage.getItem('authtoken'),
};

export const actionTypes = {
  login: 'auth/LOGIN SUCCESS',
  register: 'auth/REGISTER SUCCESS',
  logout: 'auth/LOGOUT SUCCESS',
};

export const { login, logout, register } = actionTypes;

const getters = {
  authtoken: (state) => state.authtoken,
  isAuth: (state) => state.isAuth,
};

const actions = {
  async [login]({ commit }, payload) {
    try {
      const { username, password } = payload;
      const { data } = await http.post('login', { username, password });
      localStorage.setItem('authtoken', data._kmd.authtoken);
      localStorage.setItem('role', data.role);
      localStorage.setItem('userInfo', JSON.stringify(data));
      commit(login, {
        userInfo: data,
        authtoken: data._kmd.authtoken,
        isAuth: true,
      });
    } catch (err) {
      this.$toast.error(`Something went wrong! ${err}`);
    }
  },
  [logout]({ commit }) {
    localStorage.clear();
    commit(logout);
  },
  async [register](_, payload) {
    try {
      await http.post('', payload);
    } catch (err) {
      console.log(err);
    }
  },
};

const mutations = {
  [login](state, payload) {
    Object.assign(state, payload);
  },
  [logout](state) {
    Object.assign(state, { isAuth: false, authtoken: null, userInfo: null });
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};