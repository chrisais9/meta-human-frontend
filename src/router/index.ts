import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import HomeView from "@/views/HomeView.vue";
import GalleryView from "@/views/GalleryView.vue";
import GardenView from "@/views/GardenView.vue";
import CareersView from "@/views/CareersView.vue";
import ManifestoView from "@/views/ManifestoView.vue";
import MindmapView from "@/views/MindmapView.vue";
import ShopView from "@/views/ShopView.vue";

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
    path: "/garden",
    name: "garden",
    component: GardenView,
  },
  {
    path: "/careers",
    name: "careers",
    component: CareersView,
  },
  {
    path: "/manifesto",
    name: "manifesto",
    component: ManifestoView,
  },
  {
    path: "/mindmap",
    name: "mindmap",
    component: MindmapView,
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
