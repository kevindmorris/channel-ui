<template>
  <li class="row border-0">
    <div class="col-4">
      <a :href="props.href" class="btn btn-primary btn-sm w-100">
        {{ props.buttonText }}
      </a>
    </div>
    <div class="col-8">
      <p class="m-0">{{ props.description }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
interface Props {
  buttonText: string;
  href: string;
  description: string;
}
const props = defineProps<Props>();
</script>

<style scoped></style>
