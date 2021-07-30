<template>
  <section class="m-auto w-4/12">
    <section class="text-2xl font-bold text-center py-4">
      <h1>{{ title }}</h1>
    </section>
    <section class="text-center py-2 font-medium text-lg">
      <h2>
        {{ heroCount }} Total fav {{ heroCount === 1 ? "hero" : "heros" }}
      </h2>
    </section>
    <ul class="mb-4">
      <div
        v-for="hero in heros"
        :key="hero.name"
        class="flex justify-between pb-2"
      >
        <h1>{{ hero.name }}</h1>
        <button @click="removeHero(hero.name)">x</button>
      </div>
    </ul>
    <section class="w-full">
      <form @submit.prevent="addHero" class="flex justify-between">
        <input
          type="text"
          v-model.trim="inputValue"
          placeholder="Enter hero name"
          class="w-10/12"
        />
        <input
          type="submit"
          :disabled="isDisabled"
          placeholder="Add hero"
          style="cursor: pointer"
        />
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "My fav heros",
      heros: [
        { name: "SperGirl" },
        { name: "Batman" },
        { name: "Aquaman" },
        { name: "SuperMan" },
        { name: "SpiderMan" },
      ],
      inputValue: "",
    };
  },
  methods: {
    addHero() {
      this.heros.push({ name: this.inputValue });
      this.inputValue = "";
    },
    removeHero(oldHero) {
      this.heros = this.heros.filter((hero) => hero.name !== oldHero);
    },
  },
  computed: {
    heroCount() {
      return this.heros.length;
    },
    isDisabled() {
      return this.inputValue.length < 1;
    },
  },
};
</script>

<style></style>
