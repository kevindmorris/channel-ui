<template>
  <Container
    ><h1 class="display-6 fw-bold">Create a new channel</h1>

    <hr />
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="contentInput" class="form-label">Channel title</label>
        <input
          type="text"
          class="form-control"
          id="contentInput"
          ref="contentInput"
          aria-describedby="contentHelp"
          v-model="content"
        />
        <div id="contentHelp" class="form-text">
          Great channel titles are general topics. (e.g. "Movies", "Music", or
          "Television")
        </div>
      </div>
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="openPage"
          v-model="openPage"
        />
        <label class="form-check-label" for="openPage"
          >Open the channel page on submission.</label
        >
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
      <button class="btn btn-secondary btn-sm ms-1" @click.prevent="clear">
        Clear
      </button>
    </form>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/containers/Container.vue";
import { Api } from "@/services/api/Api";
import type { Channel } from "@/types";
import { onMounted, ref, type Ref } from "vue";
import { useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const contentInput: Ref<HTMLInputElement | null> = ref(null);
const content = ref("");
const openPage = ref(false);

async function submit() {
  try {
    const response = await api.createChannel({
      content: content.value
    } as Channel);
    if (openPage.value) router.push(`/channel/${response.id}`);
    else router.push("/discover");
  } catch (error) {
    console.log(error);
  }
}

async function clear() {
  content.value = "";
  openPage.value = false;
  contentInput.value?.focus();
}

onMounted(() => {
  contentInput.value?.focus();
});
</script>

<style scoped></style>
