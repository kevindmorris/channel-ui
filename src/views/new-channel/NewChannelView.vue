<template>
  <h1 class="display-6">Create a new channel</h1>
  <p class="lead">
    Great channel titles are general topics such as
    <span class="fw-semibold">Music</span>,
    <span class="fw-semibold">Movies</span>, or
    <span class="fw-semibold">Mathematics</span>, but may be more specific
    topics such as <span class="fw-semibold">Hootie and the Blowfish</span>,
    <span class="fw-semibold">Planet of the Apes franchise</span>, or
    <span class="fw-semibold">The work of René Descartes</span>
  </p>
  <hr />
  <NewChannelForm />
</template>

<script setup lang="ts">
import NewChannelForm from "./NewChannelForm.vue";
</script>

<style scoped></style>
