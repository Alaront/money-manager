import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import NewCategoryPage from "@/pages/NewCategoryPage";

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
      component: NewCategoryPage,
      alias: "/category",
    },
  ],
});
