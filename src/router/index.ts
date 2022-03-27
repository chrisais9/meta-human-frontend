import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/landing",
    name: "landing",
    component: LandingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
