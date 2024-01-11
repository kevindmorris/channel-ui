<template>
  <RouterLink
    :to="`/comment/` + props.comment.id"
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
  >
    {{ props.comment.content }}
  </RouterLink>
</template>

<script setup lang="ts">
import type { Comment } from "@/types";

const props = defineProps<{ comment: Comment }>();
</script>

<style scoped></style>
