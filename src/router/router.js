import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/",
    },
    {
      path: "/category",
      component: CategoryPage,
      alias: "/category",
    },
  ],
});
