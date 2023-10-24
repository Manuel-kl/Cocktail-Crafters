import cockTailApi from "../../utils/api.js";

const randomCocktailModule = {
  namespaced: true,
  state: {
    randomCocktail: {},
  },
  actions: {
    async getRandomCocktail({ commit }) {
      const response = await cockTailApi.get(`/random.php`);
      commit("SET_RANDOM_COCKTAIL", response.data.drinks[0]);
    },
  },
  mutations: {
    SET_RANDOM_COCKTAIL(state, cocktail) {
      state.randomCocktail = cocktail;
    },
  },
  getters: {},
};
export default randomCocktailModule;
