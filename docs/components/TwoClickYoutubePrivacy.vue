<script setup>
import { ref } from "vue";

const props = defineProps({
  videoId: String,
});

// Vue3 - make var reactive using the composition API
const isAccepted = ref(false);

function loadVideo() {
  if (!props.videoId) {
    console.error("No YouTube id given");
    return;
  }

  isAccepted.value = true; // https://stackoverflow.com/a/68846543/809939
}
</script>

<template>
  <div
    style="
      width: 100%;
      min-height: 300px;
      max-height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px dotted var(--c-brand);
    "
  >
    <div v-if="!isAccepted" style="display: flex; flex-direction: column">
      <p>
        If you load this video, you accept the
        <a href="https://policies.google.com/privacy">privacy policy</a> of
        YouTube/Google.
      </p>
      <button @click="loadVideo" style="cursor: pointer">
        Load YouTube video
      </button>
    </div>
    <iframe
      v-if="isAccepted"
      width="100%"
      height="315"
      :src="'https://www.youtube-nocookie.com/embed/' + props.videoId"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
