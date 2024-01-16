<template>
  <RouterLink
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
    :data-test="`comment-list-item-${props.comment.id}`"
    :to="'/comment/' + props.comment.id"
    ><div class="ms-2 me-auto">
      <div
        class="fw-bold"
        :data-test="`comment-list-item-content-${props.comment.id}`"
      >
        {{ comment.content }}
      </div>
      <small
        :data-test="`comment-list-item-created-date-${props.comment.id}`"
        >{{ toDisplayDate(comment.createdDate) }}</small
      >
    </div></RouterLink
  >
</template>

<script setup lang="ts">
import type { Comment } from "@/types";
import { toDisplayDate } from "@/utils";

interface Props {
  comment: Comment;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
