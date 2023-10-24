<template>
  <div class="flex flex-col">
    <nav-bar />
    <section>
      <IntroComponent @getStarted="handleGetStarted" />
    </section>
    <section id="random-cocktails">
      <random-cocktails />
    </section>
    <footer-component />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import RandomCocktails from "@/components/RandomCocktails.vue";
import IntroComponent from "@/components/IntroComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const handleGetStarted = () => {
  console.log("Get Started button clicked in IntroComponent");
  // scroll into random-cocktails
  document
    .getElementById("random-cocktails")
    .scrollIntoView({ behavior: "smooth" });
};
</script>

<style>
</style>
