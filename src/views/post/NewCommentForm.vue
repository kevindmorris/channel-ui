<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <textarea
        type="text"
        v-model="form.content"
        class="form-control"
        placeholder="Add a comment..."
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
  postId: number;
}
const props = defineProps<Props>();

const emit = defineEmits({
  "add-comment": (payload: Comment) => payload
});

const api = new Api();

const form = reactive<Comment>({
  content: "",
  numComments: 0,
  comments: new Array<Comment>()
} as Post);

function clearForm() {
  form.content = "";
}

async function submit() {
  const newComment = await api.createComment(props.postId, form);
  emit("add-comment", newComment);
  clearForm();
}
</script>

<style scoped></style>
