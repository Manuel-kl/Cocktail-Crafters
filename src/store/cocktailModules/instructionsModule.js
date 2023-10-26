import cocktailApi from "@/utils/api";

const instructionsModule = {
    namespaced: true,

    state: {
        instructions: {},
    },
    actions: {
        async getInstructions({ commit }, idDrink) {
            const response = await cocktailApi.get(`/lookup.php?i=${idDrink}`);
            commit("setInstructions", response.data.drinks[0]);
        },
    },
    mutations: {
        setInstructions(state, instructions) {
            state.instructions = instructions;
        },
    },
    getters: {},
};

export default instructionsModule;