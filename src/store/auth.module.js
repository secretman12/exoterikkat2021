import phdStudentService from '../services/phdStudentService';

const token = JSON.parse(localStorage.getItem('token'));
const initialState = token
  ? { status: { loggedIn: true }, token }
  : { status: { loggedIn: false }, token: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit },user) {
      return phdStudentService.login(user.username,user.password).then(
        token => {
          commit('loginSuccess', token);
          return Promise.resolve(token);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      phdStudentService.logout();
      commit('logout');
    },
  },
  mutations: {
    loginSuccess(state, token) {
      state.status.loggedIn = true;
      state.token = token;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.token = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.token = null;
    },
  }
};
