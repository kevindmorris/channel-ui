<template>
  <div v-if="item">
    <Hero :title="item.content" variant="sm" type="Channel">
      <button class="btn btn-danger btn-sm" @click.prevent="remove">
        Delete</button
      ><a class="btn btn-primary btn-sm" :href="`/channel/${item.id}/post/new`"
        >New Post</a
      ></Hero
    >
    <hr />

    <div class="list-group" v-if="item.posts.length > 0">
      <PostListItem
        v-for="(item, index) in item.posts"
        :key="index"
        :item="item"
      />
    </div>
    <p v-else>No posts available.</p>
  </div>
</template>

<script setup lang="ts">
import Api from "@/services/Api";
import { Channel } from "@/types";
import { Ref, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostListItem from "./PostListItem.vue";
import Hero from "@/components/Hero.vue";

const route = useRoute();
const router = useRouter();
const api = new Api();

const loading: Ref<boolean> = ref(false);
const item: Ref<Channel | null> = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await api.getChannel(route.params.channelId);
    item.value = response;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
});

const remove = async () => {
  try {
    const response = await api.deleteChannel(route.params.channelId);
    router.push("/discover");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
