import { http } from '../services/httpClient';

const initialState = {
    userInfo: JSON.parse(localStorage.getItem('userInfo')),
};

export const actionTypes = {
    updateUserInfo: 'UPDATE USER INFO',
};

export const { updateUserInfo } = actionTypes;

const getters = {
    userInfo: (state) => state.userInfo,
};

const actions = {
    async [updateUserInfo]({ commit }, payload = null) {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if (!payload) {
          commit(updateUserInfo, user);
          return;
        }
        const { data } = await http.put(user._id, payload);
        commit(updateUserInfo, data);
      },
}

const mutations = {
    [updateUserInfo](state, payload) {
      Object.assign(state, { userInfo: payload });
    }
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
  };
  