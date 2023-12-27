<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label for="commentContent" class="form-label">Content</label>
      <input
        type="text"
        class="form-control"
        id="commentContent"
        autofocus
        v-model.trim="newCommentContent"
      />
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import Api from "../../services/Api";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const api = new Api();

const loading: Ref<boolean> = ref(false);
const newCommentContent: Ref<string> = ref("");

const submit = async () => {
  loading.value = true;
  try {
    const response = await api.createComment(
      Number(route.params.channelId),
      Number(route.params.postId),
      newCommentContent.value
    );
    router.push(
      `/channel/${route.params.channelId}/post/${route.params.postId}`
    );
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
};
</script>

<style scoped></style>
