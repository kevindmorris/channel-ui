<template>
  <div v-if="item">
    <Hero :title="item.content" variant="xs" type="Comment"
      ><button class="btn btn-danger btn-sm" @click.prevent="remove">
        Delete
      </button></Hero
    >
  </div>
</template>

<script setup lang="ts">
import Api from "@/services/Api";
import { Comment } from "@/types";
import { Ref, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import CommentListItem from "./CommentListItem.vue";
import Hero from "@/components/Hero.vue";

const router = useRouter();
const route = useRoute();
const api = new Api();

const loading: Ref<boolean> = ref(false);
const item: Ref<Comment | null> = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await api.getComment(
      route.params.channelId,
      route.params.postId,
      route.params.commentId
    );
    item.value = response;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
});

const remove = async () => {
  try {
    const response = await api.deleteComment(
      route.params.channelId,
      route.params.postId,
      route.params.commentId
    );
    router.push(
      `/channel/${route.params.channelId}/post/${route.params.postId}`
    );
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
