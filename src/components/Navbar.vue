<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <h3 class="m-0" style="font-family: 'Century Gothic', sans-serif">
          CHANNEL
        </h3>
      </a>
      <div class="collapse navbar-collapse">
        <NavbarLink
          v-for="(route, index) in routes"
          :key="index"
          :route="route"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavbarLink from "./NavbarLink.vue";
import { routes } from "@/router/routes";
</script>

<style scoped></style>
