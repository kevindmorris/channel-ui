<template>
  <RouterLink
    :to="`/channel/` + props.channel.id"
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
  >
    {{ props.channel.content }}
    <span class="badge bg-primary rounded-pill">
      {{ props.channel.numPosts }}
    </span>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Channel } from "@/types";

const props = defineProps<{ channel: Channel }>();
</script>

<style scoped></style>
