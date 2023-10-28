<template>
  <div class="flex flex-col">
    <nav-bar />
    <section>
      <IntroComponent @getStarted="handleGetStarted" />
    </section>
    <section>
      <pagination-component />
    </section>
    <section id="random-cocktails">
      <random-cocktails />
    </section>
    <footer-component />
  </div>
  <div v-show="loading">
    <LoadingComponent />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import RandomCocktails from "@/components/RandomCocktails.vue";
import IntroComponent from "@/components/IntroComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

import { ref } from "vue";

const handleGetStarted = () => {
  console.log("Get Started button clicked in IntroComponent");
  document
    .getElementById("random-cocktails")
    .scrollIntoView({ behavior: "smooth" });
};

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000);
</script>

<style>
</style>
