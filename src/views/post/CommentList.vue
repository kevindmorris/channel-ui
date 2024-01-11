<template>
  <ul class="list-group" v-if="props.comments.length > 0">
    <CommentListItem
      v-for="comment in props.comments"
      :key="comment.id"
      :comment="comment"
    />
  </ul>
  <div v-else>No comments available.</div>
</template>

<script setup lang="ts">
import type { Comment } from "@/types";
import CommentListItem from "./CommentListItem.vue";

interface Props {
  comments: Comment[];
}
const props = defineProps<Props>();
</script>

<style scoped></style>
