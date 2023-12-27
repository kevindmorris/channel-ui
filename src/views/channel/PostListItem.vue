<template>
  <a
    :href="`/channel/${item.channel.id}/post/${item.id}`"
    class="list-group-item list-group-item-action d-flex gap-3 justify-content-between"
  >
    <div>
      <p class="m-0 text-break">{{ props.item.content }}</p>
    </div>
    <span class="mb-auto badge bg-primary rounded-pill">{{
      item.numComments
    }}</span>
  </a>
</template>

<script setup lang="ts">
import { Post } from "../../types";

const props = defineProps<{ item: Post }>();
</script>

<style scoped></style>
