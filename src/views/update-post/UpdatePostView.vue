<template>
  <Container
    ><h1 class="display-6 fw-bold">
      Update
      <RouterLink class="display-6 fw-bold" :to="'/post/' + postId">{{
        post?.content
      }}</RouterLink>
    </h1>

    <hr />
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="contentInput" class="form-label">Content</label>
        <textarea
          class="form-control"
          id="contentInput"
          ref="contentInput"
          aria-describedby="contentHelp"
          v-model="content"
          @keydown="handleKeydown"
        ></textarea>
        <div id="contentHelp" class="form-text">
          Great posts are topical musings related to their channel.
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
      <RouterLink class="btn btn-secondary btn-sm ms-1" :to="'/post/' + postId">
        Back
      </RouterLink>
    </form>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/containers/Container.vue";
import { computed, onMounted, ref, type Ref } from "vue";
import { Api } from "@/services/api/Api";
import type { Post } from "@/types";
import { RouterLink, useRoute, useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const route = useRoute();

const post: Ref<Post | null> = ref(null);
const contentInput: Ref<HTMLInputElement | null> = ref(null);
const content = ref("");

const postId = computed(() => parseInt(route.params.postId as string));

const fetchPost = async () => {
  try {
    const response = await api.getPost(postId.value);
    post.value = response;
    content.value = response.content;
  } catch (error) {
    console.log(error);
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.code === "Enter") submit();
};

async function submit() {
  try {
    const response = await api.updatePost(postId.value, {
      content: content.value
    } as Post);
    router.push(`/post/${response.id}`);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fetchPost();
  contentInput.value?.focus();
});
</script>

<style scoped></style>
