<template>
  <div
    class="flex flex-row justify-between items-center p-3 bg-green z-10 relative"
  >
    <div class="flex flex-row justify-between items-center">
      <router-link
        to="/"
        class="text-white font-roboto-condensed text-lg sm:text-xl p-2 hover:text-hover-text transition-all ease duration-300"
        >Home</router-link
      >
    </div>
    <div class="gap-2 sm:gap-12 flex items-center">
      <router-link
        to=""
        class="xsm:block hidden font-roboto-condensed text-white text-lg sm:text-xl shadow-md shadow-white p-2 rounded-lg hover:text-hover-text hover:shadow-hover-text transition-all ease duration-300"
        >Click to search</router-link
      >
      <router-link
        to=""
        class="text-white font-roboto-condensed text-lg sm:text-xl p-2 hover:text-hover-text transition-all ease duration-300"
        >About</router-link
      >
      <router-link
        to=""
        class="text-white font-roboto-condensed text-lg sm:text-xl p-2 hover:text-hover-text transition-all ease duration-300"
        >Contact</router-link
      >
    </div>
  </div>
  <div
    class="xsm:hidden bg-green bg-opacity-30 py-4 flex justify-center items-center"
  >
    <router-link
      to=""
      class="text-white font-roboto-condensed text-xl bg-green bg-opacity-60 shadow-green shadow-sm p-3 rounded-md hover:text-hover-text transition-all ease duration-300"
    >
      Click to search Cocktails/Ingredients
    </router-link>
  </div>
</template>
<script setup></script>
<style>
</style>
