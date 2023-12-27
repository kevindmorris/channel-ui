<template>
  <div v-if="item">
    <Hero :title="item.content" variant="xs" type="Post"
      ><button class="btn btn-danger btn-sm" @click.prevent="remove">
        Delete
      </button>
      <a
        class="btn btn-primary btn-sm mt-auto ms-auto"
        :href="`/channel/${item.channel.id}/post/${item.id}/comment/new`"
        >New Comment</a
      ></Hero
    >
    <hr />

    <div class="list-group" v-if="item.comments.length > 0">
      <CommentListItem
        v-for="(item, index) in item.comments"
        :key="index"
        :item="item"
      />
    </div>
    <p v-else>No comments available.</p>
  </div>
</template>

<script setup lang="ts">
import Api from "@/services/Api";
import { Post } from "@/types";
import { Ref, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import CommentListItem from "./CommentListItem.vue";
import Hero from "@/components/Hero.vue";

const router = useRouter();
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

const remove = async () => {
  try {
    const response = await api.deletePost(
      route.params.channelId,
      route.params.postId
    );
    router.push(`/channel/${route.params.channelId}`);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
