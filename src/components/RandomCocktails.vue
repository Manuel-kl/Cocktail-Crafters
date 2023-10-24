<template>
  <div
    class="w-fit z-10 relative grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 mx-7"
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
      <div
        class="flex flex-col justify-center items-center py-3 gap-3 px-2 text-center"
      >
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
        <router-link
          to="/instructions"
          class="text-green text-lg font-bold hover:text-hover-text transition-all duration-300 ease-in-out"
          >Craft Your Drink
          <font-awesome-icon :icon="['fas', 'up-right-from-square']" />
        </router-link>
      </div>
    </div>
  </div>
</template>

  <script setup>
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
