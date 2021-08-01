<template>
  <Header />
  <teleport to="body">
    <LoginModal />
  </teleport>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "./utils/firebase";

export default {
  components: { Header, LoginModal },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setAuthUser", user);
      }
    });
  },

  unmounted() {
    this.$store.commit("clearValut");
  },

  methods: {},
};
</script>

<style></style>
