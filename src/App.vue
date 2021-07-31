<template>
  <Header
    @open-modal="isModalOpen = true"
    :useAuthentucatedUser="useAuthentucatedUser"
  />
  <teleport to="body">
    <LoginModal v-if="isModalOpen" @close-modal="isModalOpen = false" />
  </teleport>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utils/firebase";

export default {
  components: { Header, LoginModal },
  data() {
    return {
      isModalOpen: false,
      useAuthentucatedUser: { isLoggedIn: false, user: {} },
    };
  },
  methods: {},
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.useAuthentucatedUser = { isLoggedIn: true, user };
      } else {
        this.useAuthentucatedUser = { isLoggedIn: false, user: {} };
      }
    });
  },
};
</script>

<style></style>
