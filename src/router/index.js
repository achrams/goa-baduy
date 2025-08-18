import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      name: "about-us",
      path: "/about",
      component: () => import("../views/AboutUs.vue"),
    },
    {
      name: "book",
      path: "/book",
      component: () => import("../views/Book.vue"),
    },
    {
      name: "berita",
      path: "/berita",
      component: () => import("../views/Wisata.vue"),
    },
  ],
});

export default router;
