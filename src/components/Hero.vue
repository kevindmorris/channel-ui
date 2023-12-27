<template>
  <div>
    <span class="badge rounded-pill text-bg-secondary">{{ props.type }}</span>
    <div class="mt-2 d-flex justify-content-between flex-wrap">
      <div>
        <h1 :class="titleClasses" class="text-break">{{ props.title }}</h1>
      </div>
      <div class="d-flex gap-1 flex-wrap mt-auto ms-auto"><slot></slot></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  title?: string;
  variant?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "Channel" | "Post" | "Comment";
}

const props = withDefaults(defineProps<Props>(), { variant: "md" });

const titleClasses = computed(() => {
  return {
    "display-3": props.variant === "xl",
    "display-4": props.variant === "lg",
    "display-5": props.variant === "md",
    "display-6": props.variant === "sm",
    lead: props.variant === "xs",
  };
});
</script>

<style scoped></style>
