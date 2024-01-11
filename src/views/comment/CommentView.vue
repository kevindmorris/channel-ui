<template>
  <ThinContainer v-if="comment">
    <CommentHero :comment="comment"
  /></ThinContainer>
</template>

<script setup lang="ts">
import ThinContainer from "@/components/containers/ThinContainer.vue";
import { Api } from "@/services/api/Api";
import type { Comment } from "@/types";
import { computed, onBeforeMount, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import CommentHero from "./CommentHero.vue";

const route = useRoute();
const api = new Api();

const comment: Ref<Comment | null> = ref(null);

const commentId = computed(() => parseInt(route.params.id as string));

onBeforeMount(async () => {
  try {
    const response = await api.getComment(commentId.value);
    comment.value = response;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped></style>
