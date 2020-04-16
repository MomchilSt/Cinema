import { http } from '../services/httpClient';
//import { updateUserInfo } from '../services/userService'
const initialState = {
  isAuth: localStorage.getItem('authtoken') !== null,
  isAdmin: localStorage.getItem('role'),
  authtoken: localStorage.getItem('authtoken'),
};

export const actionTypes = {
  login: 'LOGIN',
  register: 'REGISTER',
  logout: 'LOGOUT',
};

export const { login, logout, register } = actionTypes;

const getters = {
  authtoken: (state) => state.authtoken,
  isAuth: (state) => state.isAuth,
  isAdmin: (state) => state.isAdmin,
};

const actions = {
  async [login]({ commit }, payload) {
    try {
      const { username, password } = payload;
      const { data } = await http.post('login', { username, password });

      let adminCheck = false;
      if (data.role == "Administrator") {
        adminCheck = true;
      }
      
      localStorage.setItem('authtoken', data._kmd.authtoken);
      localStorage.setItem('role', data.role);
      localStorage.setItem('userInfo', JSON.stringify(data));
      commit(login, {
        userInfo: data,
        authtoken: data._kmd.authtoken,
        isAuth: true,
        isAdmin: adminCheck
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
    Object.assign(state, { isAuth: false, isAdmin: false, authtoken: null, userInfo: null });
  },
};

export default {
  getters,
  actions,
  mutations,
  state: initialState,
};