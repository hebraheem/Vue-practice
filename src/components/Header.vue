<template>
  <nav class="w-full text-white bg-blue-600 py-4 px-4">
    <div>
      <router-link
        v-for="link in links"
        :key="link.title"
        class="text-lg font-semibold pl-10"
        :to="link.to"
        >{{ link.title }}</router-link
      >
      <div class="float-right">
        <button
          v-if="!useAuthentucatedUser?.isLoggedIn"
          class="mr-10 "
          @click="store.commit('setModal', true)"
        >
          LogIn
        </button>
        <button v-else @click="signOutUser">
          LogOut
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "../utils/firebase";
import store from "../store/index";

export default {
  data() {
    return {
      store: store,
      links: [
        { title: "Todo", to: "/todo" },
        { title: "Calendar", to: "/calendar" },
        { title: "MarkDown", to: "/markdown" },
        { title: "Calculator", to: "/calculator" },
        { title: "Chats", to: "/chats" },
        { title: "Object Detection", to: "/object-detection" },
        { title: "Modal", to: "/modal" },
      ],
    };
  },
  computed: {
    useAuthentucatedUser() {
      return this.$store.state.useAuthentucatedUser;
    },
  },
  methods: {
    signOutUser() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.$store.commit("clearVault");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    },
  },
};
</script>

<style>
.router-link-active {
  color: yellow;
}
</style>
