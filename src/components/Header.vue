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
          @click="$emit('open-modal')"
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

export default {
  props: ["useAuthentucatedUser"],
  data() {
    return {
      links: [
        { title: "Todo", to: "/todo" },
        { title: "Calendar", to: "/calendar" },
        { title: "MarkDown", to: "/markdown" },
        { title: "Calculator", to: "/calculator" },
      ],
    };
  },

  methods: {
    signOutUser() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
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
