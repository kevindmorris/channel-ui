<template>
  <div v-if="item">
    <h1 class="lead">
      Create a new comment in
      <span class="fw-semibold">{{ item.content }}</span>
    </h1>
    <hr />
    <NewCommentForm />
  </div>
</template>

<script setup lang="ts">
import Api from "@/services/Api";
import { Channel } from "@/types";
import { Ref, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import NewCommentForm from "./NewCommentForm.vue";

const route = useRoute();
const api = new Api();

const loading: Ref<boolean> = ref(false);
const item: Ref<Post | null> = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await api.getPost(
      route.params.channelId,
      route.params.postId
    );
    item.value = response;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
});
</script>

<style scoped></style>
