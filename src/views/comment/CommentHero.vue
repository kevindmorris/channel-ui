<template>
  <div class="d-flex justify-content-between align-items-center">
    <span class="badge rounded-pill text-bg-primary fs-5">Comment</span>
    <RouterLink
      class="btn btn-primary btn-sm my-auto"
      :to="'/post/' + props.comment.post.id"
      >Go to Post</RouterLink
    >
  </div>
  <h1 class="display-5">{{ props.comment.content }}</h1>
</template>

<script setup lang="ts">
import type { Comment } from "@/types";

interface Props {
  comment: Comment;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
