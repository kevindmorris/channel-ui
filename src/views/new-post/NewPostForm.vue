<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label for="postContent" class="form-label">Content</label>
      <input
        type="text"
        class="form-control"
        id="postContent"
        autofocus
        v-model.trim="newPostContent"
      />
    </div>
    <div class="form-check mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="openNewPost"
        id="openPost"
      />
      <label class="form-check-label" for="openPost">
        Open the new post's page on creation.
      </label>
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
const newPostContent: Ref<string> = ref("");
const openNewPost: Ref<boolean> = ref(true);

const submit = async () => {
  loading.value = true;
  try {
    const response = await api.createPost(
      Number(route.params.channelId),
      newPostContent.value
    );
    if (openNewPost.value)
      router.push(`/channel/${route.params.channelId}/post/${response.id}`);
    else router.push(`/channel/${route.params.channelId}`);
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
};
</script>

<style scoped></style>
