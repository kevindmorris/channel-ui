<template>
  <Container>
    <h1 class="display-6 fw-bold">Discover</h1>
    <RouterLink class="btn btn-primary btn-sm" to="/channel/new"
      >New Channel</RouterLink
    >
    <button class="btn btn-danger btn-sm ms-1" @click="clear">
      Delete All Channels
    </button>

    <hr />

    <div class="list-group" v-if="channels.length > 0">
      <ChannelListItem
        v-for="channel in channels"
        :key="channel.id"
        :channel="channel"
      />
    </div>
    <div v-else>No channels to display.</div>
  </Container>
</template>

<script setup lang="ts">
import ChannelListItem from "@/components/channel/ChannelListItem.vue";
import Container from "@/components/containers/Container.vue";
import { Api } from "@/services/api/Api";
import type { Channel } from "@/types";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const api = new Api();

const channels = ref(new Array<Channel>());

const fetchChannels = async () => {
  try {
    const response = await api.getChannels();
    channels.value = response;
  } catch (error) {
    console.log(error);
  }
};

const clear = async () => {
  try {
    await api.deleteChannels();
    fetchChannels();
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchChannels);
</script>

<style scoped></style>
