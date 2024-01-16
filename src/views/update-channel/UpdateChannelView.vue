<template>
  <Container
    ><h1 class="display-6 fw-bold">
      Update
      <RouterLink
        class="display-6 fw-bold"
        :to="'/channel/' + channelId"
        >{{ channel?.content }}</RouterLink
      >
    </h1>

    <hr />
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="contentInput" class="form-label">Title</label>
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
      <button type="submit" class="btn btn-primary btn-sm">Submit</button>
      <RouterLink
        class="btn btn-secondary btn-sm ms-1"
        :to="'/channel/' + channelId"
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
import type { Channel } from "@/types";
import { RouterLink, useRoute, useRouter } from "vue-router";

const api = new Api();
const router = useRouter();
const route = useRoute();

const channel: Ref<Channel | null> = ref(null);
const contentInput: Ref<HTMLInputElement | null> = ref(null);
const content = ref("");

const channelId = computed(() => parseInt(route.params.channelId as string));

const fetchChannel = async () => {
  try {
    const response = await api.getChannel(channelId.value);
    channel.value = response;
    content.value = response.content;
  } catch (error) {
    console.log(error);
  }
};

async function submit() {
  try {
    const response = await api.updateChannel(
      channelId.value,
      {
        content: content.value
      } as Channel
    );
    router.push(`/channel/${response.id}`);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fetchChannel();
  contentInput.value?.focus();
});
</script>

<style scoped></style>
