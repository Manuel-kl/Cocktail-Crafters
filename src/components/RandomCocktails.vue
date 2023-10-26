<template>
  <cocktails-component :products="products" />
</template>

<script setup>
import CocktailsComponent from "@/components/CocktailsComponent.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    await store.dispatch("randomCocktailModule/getRandomCocktail");
    products.value.push(store.state.randomCocktailModule.randomCocktail);
  }
});
</script>
