<template>
  <div class="d-flex justify-content-between align-items-center">
    <span class="badge rounded-pill text-bg-primary fs-5">Post</span>
    <RouterLink
      class="btn btn-primary btn-sm my-auto"
      :to="'/channel/' + props.post.channel.id"
      >Go to Channel</RouterLink
    >
  </div>
  <h1 class="display-5">{{ props.post.content }}</h1>
</template>

<script setup lang="ts">
import type { Post } from "@/types";

interface Props {
  post: Post;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
