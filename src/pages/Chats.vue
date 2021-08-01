<template>
  <section>
    <div class="p-5 m-auto w-full text-center">
      <h1 class=" text-black font-bold text-3xl">Real Time Chat App</h1>
    </div>
  </section>
  <section
    class="md:m-auto md:w-3/12 sm:w-full sm:m-4 border shadow mt-5 rounded-xl p-2 relative "
    style="min-height: 500px"
  >
    <div style="max-height:400px" class="overflow-y-scroll">
      <h1
        v-for="chat in state?.chats"
        :key="chat?.userId"
        class="m-1 h-10"
        :class="chat.userId === state.userId ? 'text-right ' : 'text-left'"
      >
        <span
          class="max-w-min p-2 mb-2 shadow my-4 rounded-xl break-words"
          :class="
            chat.userId === state.userId
              ? ' bg-blue-300 text-white'
              : 'bg-blue-500 text-white'
          "
        >
          {{ chat.message }}
        </span>
      </h1>
    </div>

    <form
      @submit.prevent="sendMessage"
      class="flex justify-start items-center bottom-0 absolute left-5 mt-10"
    >
      <input
        type="text"
        v-model="state.sender"
        class="input mt-5 w-11/12 mr-2"
        placeholder="message"
      />
      <button type="submit" class="h-10 w-10 bg-green-300 rounded shadow">
        ⏩
      </button>
    </form>
  </section>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
import firebase, { chatsRef } from "../utils/firebase";

export default {
  setup() {
    const state = reactive({
      chats: [],
      sender: "",
      userId: "",
    });

    onMounted(async () => {
      //update message insatantly i.e real time feature
      chatsRef.on("child_added", (snapshot) => {
        state.userId = firebase.auth().currentUser.uid;
        state.chats.push({
          key: snapshot.key,
          ...snapshot.val(),
        });
      });
    });

    function sendMessage() {
      const newChat = chatsRef.push();
      if (!state.sender) return;
      newChat.set({
        message: state.sender,
        userId: state.userId,
      });
      state.sender = "";
    }

    return { state, sendMessage };
  },
};
</script>

<style></style>
