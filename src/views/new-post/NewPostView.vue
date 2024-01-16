<template>
  <Container
    ><h1 class="display-6 fw-bold">
      Create a new post in
      <RouterLink class="display-6 fw-bold" :to="'/channel/' + channelId">{{
        channel?.content
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
      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="openPage"
          v-model="openPage"
        />
        <label class="form-check-label" for="openPage"
          >Open the post page on submission.</label
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
import { computed, onMounted, ref, type Ref } from "vue";
import { Api } from "@/services/api/Api";
import type { Channel, Post } from "@/types";
import { useRoute, useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const route = useRoute();
const contentInput: Ref<HTMLInputElement | null> = ref(null);
const content = ref("");
const openPage = ref(false);

const channelId = computed(() => parseInt(route.params.channelId as string));

const channel: Ref<Channel | null> = ref(null);

const fetchChannel = async () => {
  try {
    const response = await api.getChannel(channelId.value);
    channel.value = response;
  } catch (error) {
    console.log(error);
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.code === "Enter") submit();
};

async function submit() {
  try {
    const response = await api.createPost(channelId.value, {
      content: content.value
    } as Post);
    if (openPage.value) router.push(`/post/${response.id}`);
    else router.push(`/channel/${channelId.value}`);
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
  fetchChannel();
  contentInput.value?.focus();
});
</script>

<style scoped></style>
