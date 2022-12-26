import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import ChangeCashPage from "@/pages/ChangeCashPage";
import StatisticsPage from "@/pages/StatisticsPage";
import LoginPage from "@/pages/LoginPage";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/",
    },
    {
      path: "/login",
      component: LoginPage,
      alias: "/",
      meta: { hideNavigation: true },
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
    {
      path: "/statistics",
      component: StatisticsPage,
      alias: "/statistics",
    },
  ],
  linkActiveClass: "active-link",
  linkExactActiveClass: "active-link",
});
