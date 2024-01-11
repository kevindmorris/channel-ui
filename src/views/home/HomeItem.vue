<template>
  <div class="row mb-2">
    <div class="col-md-4">
      <RouterLink class="btn btn-primary btn-sm w-100" :to="props.href">{{
        props.label
      }}</RouterLink>
    </div>
    <div class="col-md-8">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  href: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
