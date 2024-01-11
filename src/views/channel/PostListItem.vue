<template>
  <RouterLink
    :to="`/post/` + props.post.id"
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
  >
    {{ props.post.content }}
    <span class="badge bg-primary rounded-pill">
      {{ props.post.numComments }}
    </span>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Post } from "@/types";

const props = defineProps<{ post: Post }>();
</script>

<style scoped></style>
