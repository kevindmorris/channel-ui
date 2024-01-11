<template>
  <ul class="list-group" v-if="props.posts.length > 0">
    <PostListItem v-for="post in props.posts" :key="post.id" :post="post" />
  </ul>
  <div v-else>No posts available.</div>
</template>

<script setup lang="ts">
import type { Post } from "@/types";
import PostListItem from "./PostListItem.vue";

interface Props {
  posts: Post[];
}
const props = defineProps<Props>();
</script>

<style scoped></style>
