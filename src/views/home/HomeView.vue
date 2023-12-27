<template>
  <h1 class="display-4 text-center">Welcome to Channel!</h1>
  <p class="lead text-center">Connect, Converse, and Collaborate.</p>
  <hr />
  <ul class="list-group grid gap-2">
    <HomeListItem
      v-for="(item, index) in items"
      :key="index"
      :button-text="item.buttonText"
      :href="item.href"
      :description="item.description"
    />
  </ul>
</template>

<script setup lang="ts">
import HomeListItem from "./HomeListItem.vue";

const items = [
  {
    buttonText: "Discover",
    href: "/discover",
    description: "Find out what others are talking about.",
  },
  {
    buttonText: "New Channel",
    href: "/channel/new",
    description: "Spark your own conversation.",
  },
];
</script>

<style scoped></style>
