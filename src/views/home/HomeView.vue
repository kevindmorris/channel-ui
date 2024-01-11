<template>
  <ThinContainer>
    <HomeHero />
    <div class="grid">
      <HomeItem
        v-for="item in items"
        :key="item.label"
        :href="item.href"
        :label="item.label"
        >{{ item.description }}</HomeItem
      >
    </div>
  </ThinContainer>
</template>

<script setup lang="ts">
import ThinContainer from "@/components/containers/ThinContainer.vue";
import { ref, type Ref } from "vue";
import HomeHero from "./HomeHero.vue";
import HomeItem from "./HomeItem.vue";

interface Item {
  label: string;
  description: string;
  href: string;
}

const items: Ref<Item[]> = ref([
  {
    label: "Discover",
    description: "Explore available channels.",
    href: "/discover"
  },
  {
    label: "New channel",
    description: "Spark a new conversation.",
    href: "/channel/new"
  }
]);
</script>
