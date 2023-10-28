import cocktailApi from "../../utils/api.js";

const nameSearchModule = {
  namespaced: true,

  state: {
    searchResults: [],
    searchQuery: "",
  },
  actions: {
    async searchByName({ commit, state }) {
      const response = await cocktailApi.get(`/search.php?s=margarita`);
    },
  },
  mutations: {},
  getters: {},
};

export default nameSearchModule;
