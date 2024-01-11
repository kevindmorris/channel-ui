<template>
  <h1 class="display-5">Discover</h1>
  <div class="d-flex justify-content-between align-items-center">
    <p class="lead">Find a channel.</p>
    <RouterLink class="btn btn-primary btn-sm my-auto" to="/channel/new"
      >New Channel</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
