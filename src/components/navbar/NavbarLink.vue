<template>
  <li class="nav-item">
    <RouterLink class="nav-link" :to="props.href"><slot /></RouterLink>
  </li>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  href: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
