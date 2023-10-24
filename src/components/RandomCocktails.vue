<template>
  <div
    class="w-fit mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
  >
    <div
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      class="z-10 relative shadow-green shadow-sm rounded-lg bg-white flex flex-col justify-center items-center"
    >
      <div class="w-full h-96 rounded-md flex">
        <img
          class="w-full h-full object-cover rounded-md"
          :src="product.strDrinkThumb"
          alt="product"
        />
      </div>
      <div class="flex flex-col justify-center items-center py-3">
        <h2 class="text-green text-2xl font-bold">
          {{ product.strDrink }}
        </h2>

        <div class="flex flex-row justify-center items-center gap-2 flex-wrap">
          <h3 class="text-black text-lg font-bold">
            {{ product.strCategory }}
          </h3>
          <span class="h-1 w-1 rounded-full bg-green"></span>
          <h4 class="text-black text-lg font-bold">
            {{ product.strAlcoholic }}
          </h4>
        </div>
        <button>Instructions</button>
      </div>
    </div>
  </div>
</template>

  <script setup>
import { ref, onMounted } from "vue";
import { mapActions, useStore } from "vuex";

const store = useStore();
const products = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    await store.dispatch("randomCocktailModule/getRandomCocktail");
    products.value.push(store.state.randomCocktailModule.randomCocktail);
  }
  console.log(products.value);
});
</script>
