<template>
  <div class="d-flex justify-content-between align-items-center">
    <span class="badge rounded-pill text-bg-primary fs-5">Channel</span>
  </div>
  <h1 class="display-4">{{ props.content }}</h1>
</template>

<script setup lang="ts">
interface Props {
  content: string;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
