import cocktailApi from '../../utils/api.js'

const nameSearchModule = {
    namespaced: true,

    state: {
        searchResults: [],
        searchQuery: '',
    },
    actions: {
        async searchByName({ commit, state }) {
            console.log(cocktailApi)
            const response = await cocktailApi.get(`/search.php?s=margarita`)
            console.log(response)
        }
    },
    mutations: {

    },
    getters: {

    },


}

export default nameSearchModule;