<template>
  <nav class="w-full text-white bg-blue-600 py-4 px-4">
    <router-link
      v-for="link in links"
      :key="link.title"
      class="text-lg font-semibold pl-10"
      :to="link.to"
      >{{ link.title }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Todo", to: "/todo" },
        { title: "Calendar", to: "/calendar" },
        { title: "MarkDown", to: "/markdown" },
      ],
    };
  },
};
</script>

<style>
.router-link-active {
  color: yellow;
}
</style>
