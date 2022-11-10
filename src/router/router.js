import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import ChangeCashPage from "@/pages/ChangeCashPage";

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
    {
      path: "/changeCash",
      component: ChangeCashPage,
      alias: "/changeCash",
    },
  ],
  linkActiveClass: "active-link",
  linkExactActiveClass: "active-link",
});
