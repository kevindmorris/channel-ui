<template>
  <Container v-if="channel">
    <span class="badge text-bg-primary">Channel</span>
    <h1 class="display-6 fw-bold">{{ channel.content }}</h1>
    <div class="d-flex">
      <RouterLink
        class="btn btn-primary btn-sm"
        :to="'/channel/' + channelId + '/post/new'"
        >New Post</RouterLink
      >
      <RouterLink
        class="btn btn-secondary btn-sm ms-1"
        :to="'/channel/' + channelId + '/update'"
        >Update Channel</RouterLink
      >
      <button class="btn btn-danger btn-sm ms-1" @click="deletePosts">
        Delete All Posts
      </button>
      <button class="btn btn-danger btn-sm ms-1" @click="deleteChannel">
        Delete Channel
      </button>
    </div>

    <hr />

    <div class="list-group" v-if="channel.posts && channel.posts.length > 0">
      <PostListItem v-for="post in channel.posts" :key="post.id" :post="post" />
    </div>
    <div v-else>No posts to display.</div>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/containers/Container.vue";
import { PostListItem } from "@/components/post";
import { Api } from "@/services/api/Api";
import type { Channel } from "@/types";
import { computed, onMounted, ref, type Ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const route = useRoute();
const channel: Ref<Channel | null> = ref(null);

const channelId = computed(() => parseInt(route.params.channelId as string));

const fetchChannel = async () => {
  try {
    const response = await api.getChannel(channelId.value);
    channel.value = response;
  } catch (error) {
    console.log(error);
  }
};

const deletePosts = async () => {
  try {
    await api.deletePostsByChannel(channelId.value);
    fetchChannel();
  } catch (error) {
    console.log(error);
  }
};

const deleteChannel = async () => {
  try {
    await api.deleteChannel(channelId.value);
    router.push("/discover");
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchChannel);
</script>

<style scoped></style>
@/components/post
