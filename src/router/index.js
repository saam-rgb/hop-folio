import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import Portfolio from "../pages/Portfolio.vue";
import CaseStudies from "../pages/CaseStudies.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/portfolio", component: Portfolio },
  { path: "/case-studies", component: CaseStudies },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
