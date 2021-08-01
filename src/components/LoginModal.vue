<template>
  <div>
    <section
      @click="closeModal"
      class="z-20 h-screen w-screen bg-gray-300 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-4 rounded min-w-max">
          <div class="relative">
            <button
              class="border text-red-500 px-2 rounded-lg absolute top-0 right-0"
              @click="closeModal"
            >
              X
            </button>
            <h1 class="text-center py-5 font-bold text-2xl">LogIn</h1>
            <section class="mt-5 w-full">
              <form @submit.prevent="handleSubmit">
                <input
                  class="input"
                  type="text"
                  v-model.lazy="email"
                  placeholder="Email"
                />
                <input
                  class="input"
                  type="password"
                  v-model.lazy="password"
                  placeholder="Password"
                />
                <button class="btn" type="submit" :disabled="isLoading">
                  <span v-if="!isLoading">LogIn</span>
                  <span v-else>⌛</span>
                </button>
                <div class="text-center">
                  <p>or</p>
                  <button
                    @click="googleLogin"
                    class="my-4 border rounded bg-gradient-to-tr from-red-500 w-full h-10 text-white"
                  >
                    LogIn with Google
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utils/firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },

  methods: {
    handleSubmit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // Signed in
          this.isLoading = false;
          this.email = "";
          this.password = "";
          this.closeModal();
        })
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage);
          this.isLoading = false;
        });
    },
    closeModal() {
      this.$emit("close-modal");
    },
    googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          //var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
          // The email of the user's account used.
          //var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          alert(error);
          // ...
        });
    },
  },
};
</script>

<style>
.input {
  @apply block w-96 h-10 mb-5 pl-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none box-border shadow;
}
.btn {
  @apply bg-blue-600 text-white hover:bg-blue-400 w-full mb-5 h-10 rounded focus:ring-2 focus:ring-indigo-500;
}
</style>
