<template>
  <section class="md:m-auto md:w-4/12 sm:w-full sm: mx-10">
    <section class="text-2xl font-bold text-center py-4">
      <h1>{{ title }}</h1>
    </section>
    <section class="text-center py-2 font-medium text-lg">
      <h2>{{ heroCount }} {{ heroCount === 1 ? "item" : "items" }} waiting</h2>
    </section>
    <section class="w-full">
      <form @submit.prevent="addHero" class="flex justify-between">
        <input
          type="text"
          v-model.trim="inputValue"
          placeholder="Todo"
          class="w-10/12 pl-2 border box-border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
        />
        <input
          type="submit"
          :disabled="isDisabled"
          placeholder="Add hero"
          style="cursor: pointer"
          class="border rounded py-2 px-2 bg-purple-500 hover:bg-purple-800 text-white"
        />
      </form>
    </section>
    <ul class="mt-10">
      <div
        v-for="hero in todos"
        :key="hero.name"
        class="flex justify-between pb-2"
      >
        <h1>{{ hero.name }}</h1>
        <button
          @click="removeHero(hero.name)"
          class="bg-red-700 text-white py-1 px-3 rounded hover:bg-red-400"
        >
          x
        </button>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Todo List",
      todos: [{ name: "Wake up" }],
      inputValue: "",
    };
  },
  methods: {
    addHero() {
      this.todos.unshift({ name: this.inputValue });
      this.inputValue = "";
    },
    removeHero(oldHero) {
      this.todos = this.todos.filter((hero) => hero.name !== oldHero);
    },
  },
  computed: {
    heroCount() {
      return this.todos.length;
    },
    isDisabled() {
      return this.inputValue.length < 1;
    },
  },
};
</script>

<style>
@media (max-width: 600) {
  .mobile {
    width: 80%;
  }
}
</style>
