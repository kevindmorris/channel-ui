<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Channel</RouterLink>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <NavbarLink
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            >{{ link.label }}</NavbarLink
          >
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import NavbarLink from "./NavbarLink.vue";

const links = ref([
  { label: "Discover", href: "/discover" },
  { label: "User", href: "/user" }
]);
</script>

<style scoped></style>
