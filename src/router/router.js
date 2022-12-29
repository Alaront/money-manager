import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import ChangeCashPage from "@/pages/ChangeCashPage";
import StatisticsPage from "@/pages/StatisticsPage";
import LoginPage from "@/pages/LoginPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/",
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/changeCash",
      component: ChangeCashPage,
      alias: "/changeCash",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/statistics",
      component: StatisticsPage,
      alias: "/statistics",
      meta: {
        requiresAuth: true,
      },
    },
  ],
  linkActiveClass: "active-link",
  linkExactActiveClass: "active-link",
});

const getCurrentUser = () => {
  return new Promise((resolve) => {
    const removeListener = onAuthStateChanged(getAuth(), (user) => {
      removeListener();
      resolve(user);
    });
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
