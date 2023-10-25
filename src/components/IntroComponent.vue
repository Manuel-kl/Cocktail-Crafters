<template>
  <div
    class="bg-green bg-opacity-30 h-full xsm:h-screen flex relative justify-center"
  >
    <div class="container relative flex z-10 h-full justify-center">
      <div class="text-center w-full my-24 sm:m-auto gap-16 flex flex-col">
        <h2
          class="w-4/5 xsm:w-fit mx-auto text-2xl xsm:text-3xl sm:text-4xl md:text-5xl bg-hover-text font-roboto-condensed lg:text-6xl uppercase text-black font-extrabold text-center z-10 bg-opacity-10 px-3 pb-2 rounded-lg"
        >
          Discover Your Favorite Cocktails
        </h2>
        <p
          class="text-black w-4/5 xsm:w-fit font-roboto-condensed mx-auto text-xl shadow-md shadow-black rounded-md p-4 bg-hover-text bg-opacity-20"
        >
          Welcome to the cocktail portal. Explore a wide range of cocktails and
          find your perfect drink.
        </p>
        <button
          class="bg-green w-fit mx-auto px-5 py-2 font-roboto-condensed rounded-sm text-white text-2xl hover:text-hover-text transition-all duration-300 ease-in-out"
          @click="handleGetStarted"
        >
          GET STARTED
        </button>
      </div>
    </div>
    <div class="absolute h-full flex w-full overflow-hidden">
      <img
        class="relative w-1/2 object-contain opacity-80"
        src="../assets/cherry-cocktail.png"
        alt=""
        style="transform: rotate(35deg)"
      />
      <img
        class="relative w-1/2 object-contain opacity-80"
        src="../assets/cocktail.webp"
        alt=""
        style="transform: rotate(-35deg)"
      />
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["getStarted"]);

const handleGetStarted = () => {
  emit("getStarted");
};
</script>
