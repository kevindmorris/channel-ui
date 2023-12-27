<template>
  <div v-if="item">
    <h1 class="display-6">
      Create a new post in <span class="fw-semibold">{{ item.content }}</span>
    </h1>
    <p class="lead">
      Great posts express feelings, generate conversation, or convey
      information.
    </p>
    <hr />
    <NewPostForm />
  </div>
</template>

<script setup lang="ts">
import Api from "@/services/Api";
import { Channel } from "@/types";
import { Ref, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import NewPostForm from "./NewPostForm.vue";

const route = useRoute();
const api = new Api();

const loading: Ref<boolean> = ref(false);
const item: Ref<Channel | null> = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await api.getChannel(Number(route.params.channelId));
    item.value = response;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
});
</script>

<style scoped></style>
