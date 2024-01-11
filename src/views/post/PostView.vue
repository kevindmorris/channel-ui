<template>
  <ThinContainer v-if="post">
    <PostHero :post="post" />
    <hr />
    <NewCommentForm :post-id="postId" @add-comment="handleAddComment" />
    <hr />
    <CommentList :comments="post.comments" />
  </ThinContainer>
</template>

<script setup lang="ts">
import ThinContainer from "@/components/containers/ThinContainer.vue";
import { Api } from "@/services/api/Api";
import type { Comment, Post } from "@/types";
import { computed, onBeforeMount, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import CommentList from "./CommentList.vue";
import NewCommentForm from "./NewCommentForm.vue";
import PostHero from "./PostHero.vue";

const route = useRoute();
const api = new Api();

const post: Ref<Post | null> = ref(null);

const postId = computed(() => parseInt(route.params.id as string));

function handleAddComment(e: Comment) {
  if (post.value) post.value.comments = [e, ...post.value.comments];
}

onBeforeMount(async () => {
  try {
    const response = await api.getPost(postId.value);
    post.value = response;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped></style>
