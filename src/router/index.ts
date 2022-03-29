import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import HomeView from "@/views/HomeView.vue";
import GalleryView from "@/views/GalleryView.vue";
import TeamView from "@/views/TeamView.vue";
import RoadMapView from "@/views/RoadMapView.vue";
import ShopView from "@/views/ShopView.vue";
import MintView from "@/views/MintView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/roadmap",
    name: "roadmap",
    component: RoadMapView,
  },
  {
    path: "/mint",
    name: "manifesto",
    component: MintView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
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
