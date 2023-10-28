<template>
  <div
    class="flex w-full h-full items-center justify-between bg-green bg-opacity-10 px-4 py-5 sm:px-6 relative"
  >
    <div class="flex w-full items-center justify-center relative z-40">
      <h4
        class="text-white bg-green p-3 rounded-md font-roboto-condensed text-xl lg:hidden cursor-pointer hover:text-hover-text"
        @click="showLetters = !showLetters"
        v-show="!showLetters"
      >
        List all cocktails by letter
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </h4>
      <div v-show="showLetters" class="lg:hidden">
        <a-z-component :show-etters="showLetters" :hideLetters="hideLetters" />
      </div>
      <div v-show="!showLetters" class="hidden lg:flex">
        <a-z-component />
      </div>
    </div>
  </div>
  <div
    class="fixed bg-black bg-opacity-90 w-full h-screen lg:hidden z-30 top-0"
    v-show="showLetters"
    @click="showLetters = false"
  ></div>
  <div
    class="fixed top-5 right-5 z-40 text-4xl bg-green text-white hover:text-hover-text p-3 rounded-md font-roboto-condensed lg:hidden animate-pulse cursor-pointer"
    v-show="showLetters"
    @click="showLetters = false"
  >
    <font-awesome-icon :icon="['fas', 'x']" />
  </div>
</template>
<script setup>
import AZComponent from "./AZComponent.vue";

import { ref } from "vue";

const showLetters = ref(false);

const hideLetters = () => {
  showLetters.value = false;
};
</script>
