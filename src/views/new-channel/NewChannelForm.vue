<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label for="channelTitle" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="channelTitle"
        autofocus
        v-model.trim="newChannelContent"
      />
    </div>
    <div class="form-check mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="openNewChannel"
        id="openChannel"
      />
      <label class="form-check-label" for="openChannel">
        Open the new channel's page on creation.
      </label>
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import Api from "../../services/Api";
import { useRouter } from "vue-router";

const router = useRouter();
const api = new Api();

const loading: Ref<boolean> = ref(false);
const newChannelContent: Ref<string> = ref("");
const openNewChannel: Ref<boolean> = ref(true);

const submit = async () => {
  loading.value = true;
  try {
    const response = await api.createChannel(newChannelContent.value);
    if (openNewChannel.value) router.push(`/channel/${response.id}`);
    else router.push("/discover");
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
};
</script>

<style scoped></style>
