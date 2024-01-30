<template>
  <div></div>
</template>

<script setup lang="ts">
import { Api } from "@/services/api/Api";
import { type Ref, onMounted, ref } from "vue";

const user: Ref<any> = ref(null);

const api = new Api();

const fetchChannel = async () => {
  try {
    const response = await api.getUser();
    user.value = response;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchChannel);
</script>

<style scoped></style>
