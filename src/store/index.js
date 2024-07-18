import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    }
  },
  actions: {
    login({ commit }, user) {
      const fixedUsername = 'admin';
      const fixedPassword = 'admin';

      if (user.username === fixedUsername && user.password === fixedPassword) {
        commit('setUser', user);
        return true;
      } else {
        return false;
      }
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    }
  }
});

export default store;
