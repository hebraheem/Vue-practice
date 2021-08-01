<template>
  <Header @open-modal="isModalOpen = true" />
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
    };
  },

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
