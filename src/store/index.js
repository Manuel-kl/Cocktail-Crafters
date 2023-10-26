import { createStore } from "vuex";
import nameSearchModule from "./cocktailModules/nameSearchModule.js";
import randomCocktailModule from "./cocktailModules/randomCocktailModule.js";
import instructionsModule from "./cocktailModules/instructionsModule.js";
import sortCocktailsModule from "./cocktailModules/sortCocktailsModule.js";

export default createStore({
    modules: {
        nameSearchModule: nameSearchModule,
        randomCocktailModule: randomCocktailModule,
        instructionsModule: instructionsModule,
        sortCocktailsModule: sortCocktailsModule,
    },
});