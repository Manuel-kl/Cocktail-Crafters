<template>
  <div v-show="loading">
    <loading-component />
  </div>
  <div>
    <nav-bar />
    <pagination-component />
    <cocktails-component :products="products" />
    <footer-component />
  </div>
</template>
<script setup>
import CocktailsComponent from "@/components/CocktailsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

const store = useStore();
const route = useRoute();
const products = ref([]);
const loading = ref(true);
let letter = route.params.letter;

onMounted(() => {
  watchEffect(() => {
    letter = route.params.letter;
    getSortedCocktails();
  });
});

const getSortedCocktails = async () => {
  loading.value = true;
  await store.dispatch("sortCocktailsModule/getSortedCocktails", letter);
  products.value = store.state.sortCocktailsModule.sortedCocktails;
  loading.value = false;
};
</script>
