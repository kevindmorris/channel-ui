<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <textarea
        type="text"
        v-model="form.content"
        class="form-control"
        placeholder="Add a post..."
        rows="2"
        required
        @keydown.ctrl.enter="submit"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end gap-1">
      <button class="btn btn-secondary btn-sm" @click.prevent="clearForm">
        Clear
      </button>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Api } from "@/services/api/Api";
import type { Comment, Post } from "@/types";

interface Props {
  channelId: number;
}
const props = defineProps<Props>();

const emit = defineEmits({
  "add-post": (payload: Post) => payload
});

const api = new Api();

const form = reactive<Post>({
  content: "",
  numComments: 0,
  comments: new Array<Comment>()
} as Post);

function clearForm() {
  form.content = "";
}

async function submit() {
  const newPost = await api.createPost(props.channelId, form);
  emit("add-post", newPost);
  clearForm();
}
</script>

<style scoped></style>
