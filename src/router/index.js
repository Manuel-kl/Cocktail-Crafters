import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/instructions/:idDrink",
        name: "instructions",
        component: () =>
            import ("../views/RecipeView.vue"),
    },
    {
        path: "/cocktails/:letter",
        name: "cocktails",
        component: () =>
            import ("../views/SortedCocktails.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;