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
      component: () => import("../views/Articles.vue"),
    },
    {
      name: "admin",
      path: "/admin",
      component: () => import("../views/Admin.vue"),
    },
    {
      name: "dashboard",
      path: "/admin/dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      name: "admin-articles",
      path: "/admin/articles",
      component: () => import("../views/AdminArticles.vue"),
    },
    {
      name: "admin-articles-add",
      path: "/admin/articles/add",
      component: () => import("../views/AddEditArticle.vue"),
    },
    {
      name: "admin-articles-edit",
      path: "/admin/articles/edit/:id",
      component: () => import("../views/AddEditArticle.vue"),
    },
    {
      name: "admin-about-edit",
      path: "/admin/about",
      component: () => import("../views/AdminAbout.vue"),
    },
  ],
});

export default router;
