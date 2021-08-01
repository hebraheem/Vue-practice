import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isModalOpen: false,
      useAuthentucatedUser: { isLoggedIn: false, user: {} },
    };
  },
  mutations: {
    clearVault(state) {
      state.useAuthentucatedUser = { isLoggedIn: false, user: {} };
    },

    setAuthUser(state, payload) {
      if (payload) {
        state.useAuthentucatedUser = { isLoggedIn: true, user: payload };
      } else {
        state.useAuthentucatedUser = { isLoggedIn: false, user: {} };
      }
    },

    setModal(state, payload) {
      state.isModalOpen = payload;
    },
  },
});

export default store;
