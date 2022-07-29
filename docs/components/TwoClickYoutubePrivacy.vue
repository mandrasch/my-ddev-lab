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
  <div class="two-click-privacy">
    <div
      v-if="!isAccepted"
      class="two-click-privacy__dialog"
      style="
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 5px;
        padding: 10px;
        align-items: center;
        border: 3px dotted var(--c-brand);
      "
    >
      <p style="font-weight: bold; margin-bottom: 5px">Embedded Video</p>
      <p>
        By loading this video, you accept the
        <a href="https://policies.google.com/privacy">privacy policy</a> of
        YouTube/Google.
      </p>
      <button
        @click="loadVideo"
        style="
          cursor: pointer;
          width: 200px;
          height: 50px;
          background-color: var(--vp-c-brand);
          color: white;
        "
      >
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

<style>
.two-click-privacy {
  width: 100%;
  min-height: 300px;
  max-height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-radius: 5px;
}

html.dark .two-click-privacy {
  color: black;
  background-color: #333;
}
</style>
