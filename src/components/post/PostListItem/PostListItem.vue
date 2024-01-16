<template>
  <RouterLink
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
    :data-test="`post-list-item-${props.post.id}`"
    :to="'/post/' + props.post.id"
    ><div class="ms-2 me-auto">
      <div
        class="fw-bold"
        :data-test="`post-list-item-content-${props.post.id}`"
      >
        {{ post.content }}
      </div>
      <small :data-test="`post-list-item-created-date-${props.post.id}`">{{
        toDisplayDate(post.createdDate)
      }}</small>
    </div>
    <span
      class="badge bg-primary rounded-pill"
      :data-test="`post-list-item-comment-count-${props.post.id}`"
      >{{ post.numComments }}</span
    ></RouterLink
  >
</template>

<script setup lang="ts">
import type { Post } from "@/types";
import { toDisplayDate } from "@/utils";

interface Props {
  post: Post;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
