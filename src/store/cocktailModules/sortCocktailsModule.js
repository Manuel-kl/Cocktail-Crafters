import cocktailApi from "@/utils/api";

const sortCocktailsModule = {
  namespaced: true,
  state: {
    sortedCocktails: [],
  },
  actions: {
    async getSortedCocktails({ commit }, letter) {
      try {
        const response = await cocktailApi.get(`/search.php?f=${letter}`);
        commit("SET_SORTED_COCKTAILS", response.data.drinks);
      } catch {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_SORTED_COCKTAILS(state, cocktails) {
      state.sortedCocktails = cocktails;
    },
  },
  getters: {},
};

export default sortCocktailsModule;
