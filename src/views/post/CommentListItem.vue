<template>
  <a
    :href="`/channel/${item.post?.channel.id}/post/${item.post?.id}/comment/${item.id}`"
    class="list-group-item list-group-item-action d-flex gap-3 justify-content-between"
  >
    <div>
      <p class="m-0 text-break">{{ props.item.content }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { Comment } from "../../types";

const props = defineProps<{ item: Comment }>();
</script>

<style scoped></style>
