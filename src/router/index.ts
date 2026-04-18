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
      path: "/articles",
      name: "articles",
      component: () => import("../views/ArticlesView.vue"),
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

export default router;
