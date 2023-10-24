import { createStore } from "vuex";
import nameSearchModule from "./cocktailModules/nameSearchModule.js";
import randomCocktailModule from "./cocktailModules/randomCocktailModule.js";

export default createStore({
  modules: {
    nameSearchModule: nameSearchModule,
    randomCocktailModule: randomCocktailModule,
  },
});
