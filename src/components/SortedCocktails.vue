<template>
  <nav-bar />
  <pagination-component />
  <cocktails-component :products="products" />
  <footer-component />
</template>
<script setup>
import CocktailsComponent from "@/components/CocktailsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";

import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

const store = useStore();
const route = useRoute();
const products = ref([]);
let letter = route.params.letter;

onMounted(() => {
  watchEffect(() => {
    letter = route.params.letter;
    getSortedCocktails();
  });
});

const getSortedCocktails = async () => {
  await store.dispatch("sortCocktailsModule/getSortedCocktails", letter);
  products.value = store.state.sortCocktailsModule.sortedCocktails;
};
</script>
