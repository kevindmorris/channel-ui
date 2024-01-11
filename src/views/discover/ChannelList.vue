<template>
  <ul class="list-group" v-if="channels.length > 0">
    <ChannelListItem
      v-for="channel in channels"
      :key="channel.id"
      :channel="channel"
    />
  </ul>
  <div v-else>No channels available.</div>
</template>

<script setup lang="ts">
import { Api } from "@/services/api/Api";
import type { Channel } from "@/types";
import { onBeforeMount, ref, type Ref } from "vue";
import ChannelListItem from "./ChannelListItem.vue";

const api = new Api();

const channels: Ref<Channel[]> = ref([]);

onBeforeMount(async () => {
  try {
    const response = await api.getChannels();
    channels.value = response;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped></style>
