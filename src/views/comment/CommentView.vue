<template>
  <Container v-if="comment">
    <span class="badge text-bg-primary">Comment</span>
    <h1 class="display-6 fw-bold">{{ comment.content }}</h1>
    <div class="d-flex">
      <RouterLink
        class="btn btn-secondary btn-sm ms-1"
        :to="'/comment/' + commentId + '/update'"
        >Update Comment</RouterLink
      >
      <button class="btn btn-danger btn-sm ms-1" @click="deleteComment">
        Delete Comment
      </button>
      <RouterLink
        class="btn btn-secondary btn-sm ms-auto"
        :to="'/post/' + comment.post.id"
        >Back to Post</RouterLink
      >
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/containers/Container.vue";
import { Api } from "@/services/api/Api";
import type { Comment } from "@/types";
import { computed, onMounted, ref, type Ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const route = useRoute();
const comment: Ref<Comment | null> = ref(null);

const commentId = computed(() => parseInt(route.params.commentId as string));

const fetchComment = async () => {
  try {
    const response = await api.getComment(commentId.value);
    comment.value = response;
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async () => {
  try {
    await api.deleteComment(commentId.value);
    router.push(`/post/${comment.value?.post.id}`);
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchComment);
</script>

<style scoped></style>
