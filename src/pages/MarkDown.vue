<template>
  <section class="text-center py-4 w-full m-auto">
    <h1 class=" text-black font-bold text-3xl">Markdown</h1>
  </section>
  <section class="md:flex sm:block md:justify-start mb-10">
    <article
      class="sm:w-full sm:mx-10 md:w-6/12 md:ml-20 h-screen sm:mb-20 bg-gray-300"
    >
      <textarea
        :value="markdown"
        @input="handleChange"
        class="w-full h-full border pl-2"
        placeholder="Markdown "
      ></textarea>
    </article>
    <article
      class="sm:w-full sm:mx-10 md:w-6/12 h-screen md:mr-20 border bg-gray-100"
      v-html="markedText"
    ></article>
  </section>
</template>

<script>
import marked from "marked";
import debounce from "../utils/debounce";

export default {
  mixins: [debounce],
  data() {
    return {
      markdown: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.markdown);
    },
  },
  methods: {
    handleChange(e) {
      const update = () => (this.markdown = e.target.value);
      this.debounce(update, 500);
    },
  },
};
</script>

<style></style>
