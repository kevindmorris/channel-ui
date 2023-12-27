<template>
  <a
    :href="`/channel/${item.id}`"
    class="list-group-item list-group-item-action d-flex gap-3 justify-content-between"
  >
    <div>
      <p class="m-0 text-break">{{ props.item.content }}</p>
    </div>
    <span class="mb-auto badge bg-primary rounded-pill">{{
      item.numPosts
    }}</span>
  </a>
</template>

<script setup lang="ts">
import { Channel } from "@/types";

const props = defineProps<{ item: Channel }>();
</script>

<style scoped></style>
