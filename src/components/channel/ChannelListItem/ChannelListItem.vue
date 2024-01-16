<template>
  <RouterLink
    class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
    :data-test="`channel-list-item-${props.channel.id}`"
    :to="'/channel/' + props.channel.id"
    ><div class="ms-2 me-auto">
      <div
        class="fw-bold"
        :data-test="`channel-list-item-content-${props.channel.id}`"
      >
        {{ channel.content }}
      </div>
      <small
        :data-test="`channel-list-item-created-date-${props.channel.id}`"
        >{{ toDisplayDate(channel.createdDate) }}</small
      >
    </div>
    <span
      class="badge bg-primary rounded-pill"
      :data-test="`channel-list-item-post-count-${props.channel.id}`"
      >{{ channel.numPosts }}</span
    ></RouterLink
  >
</template>

<script setup lang="ts">
import type { Channel } from "@/types";
import { toDisplayDate } from "@/utils";
import { RouterLink } from "vue-router";

interface Props {
  channel: Channel;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
