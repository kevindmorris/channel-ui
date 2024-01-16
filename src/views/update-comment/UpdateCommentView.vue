<template>
  <Container
    ><h1 class="display-6 fw-bold">
      Update
      <RouterLink class="display-6 fw-bold" :to="'/comment/' + commentId">{{
        comment?.content
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
          Great comments are timely reactions to posted content.
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
      <RouterLink
        class="btn btn-secondary btn-sm ms-1"
        :to="'/comment/' + commentId"
      >
        Back
      </RouterLink>
    </form>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/containers/Container.vue";
import { computed, onMounted, ref, type Ref } from "vue";
import { Api } from "@/services/api/Api";
import type { Comment } from "@/types";
import { RouterLink, useRoute, useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const route = useRoute();

const comment: Ref<Comment | null> = ref(null);
const contentInput: Ref<HTMLInputElement | null> = ref(null);
const content = ref("");

const commentId = computed(() => parseInt(route.params.commentId as string));

const fetchComment = async () => {
  try {
    const response = await api.getComment(commentId.value);
    comment.value = response;
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
    const response = await api.updateComment(commentId.value, {
      content: content.value
    } as Comment);
    router.push(`/comment/${response.id}`);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fetchComment();
  contentInput.value?.focus();
});
</script>

<style scoped></style>
