<template>
  <div>
    <nav-bar />
    <section class="grid grid-cols-3 py-5 px-7 bg-green bg-opacity-10">
      <div
        class="col-span-1 bg-green bg-opacity-10 p-7 flex flex-col items-center"
      >
        <div class="rounded-sm shadow-md shadow-black">
          <img
            class="w w-full object-cover rounded-md"
            :src="cocktail.strDrinkThumb"
            :alt="cocktail.strDrink"
          />
        </div>
        <div
          class="flex flex-col items-center w-full mt-5 font-roboto-condensed"
        >
          <h1
            class="text-4xl px-3 rounded-lg shadow-md shadow-green hover:shadow-black font-bold font-roboto-condensed text-green py-3"
          >
            {{ cocktail.strDrink }}
          </h1>
          <div
            class="flex flex-col items-center text-lg font-roboto-condensed mt-5"
          >
            <p>
              Category:
              <span class="text-lg font-roboto-condensed font-bold text-green">
                {{ cocktail.strCategory }}</span
              >
            </p>
            <p>
              Type:
              <span class="text-lg font-roboto-condensed font-bold text-green">
                {{ cocktail.strAlcoholic }}</span
              >
            </p>
            <p class="text-lg font-roboto-condensed">
              Glass type :
              <span class="text-lg font-roboto-condensed font-bold text-green">
                {{ cocktail.strGlass }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-2 bg-green bg-opacity-10 p-5 font-roboto-condensed">
        <h1 class="text-3xl text-black underline">Instructions</h1>
        <p class="w-8/12 py-3 text-xl">
          {{ cocktail.strInstructions }}
        </p>
        <h2 class="text-black underline text-3xl">Ingredients</h2>
        <ul class="list-disc list-inside mt-2">
          <li class="text-xl" v-if="cocktail.strIngredient1">
            {{ cocktail.strMeasure1 }} {{ cocktail.strIngredient1 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient2">
            {{ cocktail.strMeasure2 }} {{ cocktail.strIngredient2 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient3">
            {{ cocktail.strMeasure3 }} {{ cocktail.strIngredient3 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient4">
            {{ cocktail.strMeasure4 }} {{ cocktail.strIngredient4 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient5">
            {{ cocktail.strMeasure5 }} {{ cocktail.strIngredient5 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient6">
            {{ cocktail.strMeasure6 }} {{ cocktail.strIngredient6 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient7">
            {{ cocktail.strMeasure7 }} {{ cocktail.strIngredient7 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient8">
            {{ cocktail.strMeasure8 }} {{ cocktail.strIngredient8 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient9">
            {{ cocktail.strMeasure9 }} {{ cocktail.strIngredient9 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient10">
            {{ cocktail.strMeasure10 }} {{ cocktail.strIngredient10 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient11">
            {{ cocktail.strMeasure11 }} {{ cocktail.strIngredient11 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient12">
            {{ cocktail.strMeasure12 }} {{ cocktail.strIngredient12 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient13">
            {{ cocktail.strMeasure13 }} {{ cocktail.strIngredient13 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient14">
            {{ cocktail.strMeasure14 }} {{ cocktail.strIngredient14 }}
          </li>
          <li class="text-xl" v-if="cocktail.strIngredient15">
            {{ cocktail.strMeasure15 }} {{ cocktail.strIngredient15 }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
import { onMounted, ref } from "vue";

import { useStore } from "vuex";

const store = useStore();
const cocktail = ref({});

onMounted(async () => {
  await store.dispatch("randomCocktailModule/getRandomCocktail");
  cocktail.value = store.state.randomCocktailModule.randomCocktail;
  console.log(cocktail.value);
});
</script>
