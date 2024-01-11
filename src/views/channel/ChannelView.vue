<template>
  <ThinContainer v-if="channel">
    <ChannelHero :content="channel?.content" />
    <hr />
    <NewPostForm :channel-id="channelId" @add-post="handleAddPost" />
    <hr />
    <PostList :posts="channel.posts" />
  </ThinContainer>
</template>

<script setup lang="ts">
import ThinContainer from "@/components/containers/ThinContainer.vue";
import { Api } from "@/services/api/Api";
import type { Channel, Post } from "@/types";
import { computed, onBeforeMount, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import ChannelHero from "./ChannelHero.vue";
import NewPostForm from "./NewPostForm.vue";
import PostList from "./PostList.vue";

const route = useRoute();
const api = new Api();

const channel: Ref<Channel | null> = ref(null);

const channelId = computed(() => parseInt(route.params.id as string));

function handleAddPost(e: Post) {
  if (channel.value) channel.value.posts = [e, ...channel.value.posts];
}

onBeforeMount(async () => {
  try {
    const response = await api.getChannel(channelId.value);
    channel.value = response;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped></style>
