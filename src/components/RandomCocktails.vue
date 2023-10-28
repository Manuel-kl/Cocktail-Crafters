<template>
  <div v-show="loading">
    <loading-component />
  </div>
  <div v-show="!loading">
    <cocktails-component :products="products" />
  </div>
</template>

<script setup>
import CocktailsComponent from "@/components/CocktailsComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  for (let i = 0; i < 10; i++) {
    await store.dispatch("randomCocktailModule/getRandomCocktail");
    products.value.push(store.state.randomCocktailModule.randomCocktail);
  }
  loading.value = false;
});
</script>
