<template>
  <div class="d-flex justify-content-between flex-wrap">
    <div>
      <h1 class="display-4">Discover</h1>
      <p class="lead m-0">Find a channel.</p>
    </div>
    <a class="btn btn-primary btn-sm mt-auto ms-auto" href="/channel/new"
      >New Channel</a
    >
  </div>
  <hr />

  <div class="list-group" v-if="items.length > 0">
    <ChannelListItem v-for="(item, index) in items" :key="index" :item="item" />
  </div>
  <p v-else>No channels available.</p>
</template>

<script setup lang="ts">
import Api from "@/services/Api";
import { Channel } from "@/types";
import { Ref, onMounted, ref } from "vue";
import ChannelListItem from "./ChannelListItem.vue";

const api = new Api();

const loading: Ref<boolean> = ref(false);
const items: Ref<Channel[]> = ref([]);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await api.getChannels();
    items.value = response;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
});
</script>

<style scoped></style>
