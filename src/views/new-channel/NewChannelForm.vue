<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label for="content" class="form-label">Name</label>
      <input
        type="text"
        id="content"
        ref="contentInput"
        v-model="form.content"
        class="form-control"
        required
      />
    </div>
    <div class="form-check mb-3">
      <input
        type="checkbox"
        id="open"
        v-model="form.createAnother"
        class="form-check-input"
      />
      <label for="open" class="form-check-label">Create another.</label>
    </div>
    <div class="d-flex justify-content-end gap-1">
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        @click.prevent="clearForm"
      >
        Clear
      </button>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Api } from "@/services/api/Api";
import type { Channel } from "@/types";
import { onMounted, reactive, ref, type Ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const api = new Api();

const contentInput: Ref<HTMLInputElement | null> = ref(null);
const form = reactive({ content: "", createAnother: false });

function clearForm() {
  form.content = "";
  form.createAnother = false;
}

async function submit() {
  const newChannel = await api.createChannel({
    content: form.content
  } as Channel);
  if (!form.createAnother) router.push(`/channel/${newChannel.id}`);
  clearForm();
}

onMounted(() => {
  contentInput.value?.focus();
});
</script>

<style scoped></style>
