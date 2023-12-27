<template>
  <a class="nav-item nav-link" :href="props.route.href">{{
    props.route.title
  }}</a>
</template>

<script setup lang="ts">
interface Props {
  route: { title: string; href: string };
}

const props = defineProps<Props>();
</script>

<style scoped></style>
