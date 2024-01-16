<template>
  <Container v-if="post">
    <span class="badge text-bg-primary">Post</span>
    <h1 class="display-6 fw-bold">{{ post.content }}</h1>
    <div class="d-flex">
      <RouterLink
        class="btn btn-primary btn-sm"
        :to="'/post/' + postId + '/comment/new'"
        >New Comment</RouterLink
      >
      <RouterLink
        class="btn btn-secondary btn-sm ms-1"
        :to="'/post/' + postId + '/update'"
        >Update Post</RouterLink
      >
      <button class="btn btn-danger btn-sm ms-1" @click="deleteComments">
        Delete All Comments
      </button>
      <button class="btn btn-danger btn-sm ms-1" @click="deletePost">
        Delete Post
      </button>
      <RouterLink
        class="btn btn-secondary btn-sm ms-auto"
        :to="'/channel/' + post.channel.id"
        >Back to Channel</RouterLink
      >
    </div>

    <hr />

    <div class="list-group" v-if="post.comments.length > 0">
      <CommentListItem
        v-for="comment in post.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <div v-else>No comments to display.</div>
  </Container>
</template>

<script setup lang="ts">
import CommentListItem from "@/components/comment/CommentListItem.vue";
import Container from "@/components/containers/Container.vue";
import { Api } from "@/services/api/Api";
import type { Post } from "@/types";
import { computed, onMounted, ref, type Ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const route = useRoute();
const post: Ref<Post | null> = ref(null);

const postId = computed(() => parseInt(route.params.postId as string));

const fetchPost = async () => {
  try {
    const response = await api.getPost(postId.value);
    post.value = response;
  } catch (error) {
    console.log(error);
  }
};

const deleteComments = async () => {
  try {
    await api.deleteCommentsByPost(postId.value);
    fetchPost();
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async () => {
  try {
    await api.deletePost(postId.value);
    router.push(`/channel/${post.value?.channel.id}`);
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchPost);
</script>

<style scoped></style>
