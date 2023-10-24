<template>
  <div class="flex flex-col">
    <nav-bar />
    <IntroComponent />
    <random-cocktails />
    <footer-component />
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
import RandomCocktails from "@/components/RandomCocktails.vue";
import IntroComponent from "@/components/IntroComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style >
</style>
