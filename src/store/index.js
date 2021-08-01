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

    setOpenModal(state, payload) {
      state.isModalOpen = payload;
    },

    closeModal(state, payload) {
      state.isModalOpen = payload;
    },
  },
});

export default store;
