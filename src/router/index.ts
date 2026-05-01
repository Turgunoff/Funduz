import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/my-projects",
      name: "my-projects",
      component: () => import("../views/MyProjectsView.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/FavoritesView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
    },
    {
      path: "/project/:id",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/donate/:projectId",
      name: "donate",
      component: () => import("../views/DonateView.vue"),
    },
    {
      path: "/explore",
      name: "explore",
      component: () => import("../views/ExploreView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/how-it-works",
      name: "how-it-works",
      component: () => import("../views/HowItWorksView.vue"),
    },
    {
      path: "/community",
      name: "community",
      component: () => import("../views/CommunityView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../views/ForgotPasswordView.vue"),
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("../views/ResetPasswordView.vue"),
    },
    {
      path: "/create-project",
      name: "create-project",
      component: () => import("../views/CreateProjectView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/story/:id",
      name: "story",
      component: () => import("../views/StoryView.vue"),
    },
    {
      path: "/help",
      name: "help",
      component: () => import("../views/HelpView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/trends",
      name: "trends",
      component: () => import("../views/TrendsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyView.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("../views/TermsView.vue"),
    },
    {
      path: "/security",
      name: "security",
      component: () => import("../views/SecurityView.vue"),
    },
    {
      path: "/notifications",
      name: "notifications",
      component: () => import("../views/NotificationsView.vue"),
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/ArticlesView.vue"),
    },
    {
      path: "/success-stories",
      name: "success-stories",
      component: () => import("../views/SuccessStoriesView.vue"),
    },
    {
      path: "/article/:slug",
      name: "article-detail",
      component: () => import("../views/ArticleDetailView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

import { useAuthStore } from "../stores/auth";

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    // Redirect to login if trying to access auth-only page
    next({ name: "login", query: { redirect: to.fullPath } });
  } else if (to.name === "login" && authStore.isLoggedIn) {
    // Redirect to home if already logged in and trying to access login page
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
