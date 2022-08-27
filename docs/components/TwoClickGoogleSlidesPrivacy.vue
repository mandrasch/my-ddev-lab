<script setup>
import { ref } from "vue";

const props = defineProps({
  presentationId: String,
});

// Vue3 - make var reactive using the composition API
const isAccepted = ref(false);

function loadPresentation() {
  if (!props.presentationId) {
    console.error("No slide id given");
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
      <p style="font-weight: bold; margin-bottom: 5px">
        Embedded Google Slides presentation
      </p>
      <p>
        By loading this presentation, you accept the
        <a href="https://policies.google.com/privacy"
          >privacy policy and terms</a
        >
        of Google Drive.
      </p>
      <button
        @click="loadPresentation"
        style="
          cursor: pointer;
          width: 200px;
          height: 50px;
          background-color: var(--vp-c-brand);
          color: white;
        "
      >
        Load Google Slides presentation
      </button>
    </div>

    <iframe
      v-if="isAccepted"
      :src="
        'https://docs.google.com/presentation/d/e/' +
        props.presentationId +
        '/embed?start=false&loop=false&delayms=3000'
      "
      frameborder="0"
      width="960"
      height="569"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    >
    </iframe>
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
