<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="container my-3">
    <div class="col-md-8 mx-auto">
      <RouterView />
    </div>
  </div>
</template>
