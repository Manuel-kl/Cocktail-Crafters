<template>
  <div
    class="w-fit z-10 relative grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-10 mt-10 mb-5 mx-auto"
  >
    <div
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      class="z-10 relative shadow-green shadow-sm rounded-lg bg-white flex flex-col mx-2 xsm:w-fit w-72 justify-between"
    >
      <div>
        <div class="w-full rounded-md flex">
          <img
            class="w-full md:h-80 xsm:h-60 object-cover rounded-md mx-auto"
            :src="product.strDrinkThumb"
            :alt="product.strDrink"
          />
        </div>
        <div
          class="flex flex-col justify-center items-center p-2 xsm:gap-3 text-center h-max"
        >
          <h2 class="text-green sm:text-2xl text-xl font-bold">
            {{ product.strDrink }}
          </h2>
          <div
            class="flex flex-row justify-center gap-1 items-center flex-wrap"
          >
            <p class="text-black text-sm xsm:text-md lg:text-lg font-bold">
              {{ product.strCategory }}
            </p>
            <span class="h-1 w-1 rounded-full bg-green"></span>
            <p class="text-black text-sm xsm:text-md md:lg font-bold">
              {{ product.strAlcoholic }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex w-full text-center pb-3 justify-center items-center">
        <router-link
          to="/instructions"
          class="text-green text-md sm:text-lg font-bold hover:text-hover-text transition-all duration-300 ease-in-out"
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
