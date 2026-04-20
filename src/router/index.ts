import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ExploreView from "../views/ExploreView.vue";
import HowItWorksView from "../views/HowItWorksView.vue";
import CommunityView from "../views/CommunityView.vue";
import LoginView from "../views/LoginView.vue";
import CreateProjectView from "../views/CreateProjectView.vue";
import StoryView from "../views/StoryView.vue";
import FaqView from "../views/FaqView.vue";
import ContactView from "../views/ContactView.vue";
import SearchView from "../views/SearchView.vue";
import TrendsView from "../views/TrendsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/project/:id",
      name: "project",
      component: ProjectView,
    },
    {
      path: "/explore",
      name: "explore",
      component: ExploreView,
    },
    {
      path: "/how-it-works",
      name: "how-it-works",
      component: HowItWorksView,
    },
    {
      path: "/community",
      name: "community",
      component: CommunityView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/create-project",
      name: "create-project",
      component: CreateProjectView,
      meta: { requiresAuth: true },
    },
    {
      path: "/story/:id",
      name: "story",
      component: StoryView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/trends",
      name: "trends",
      component: TrendsView,
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
