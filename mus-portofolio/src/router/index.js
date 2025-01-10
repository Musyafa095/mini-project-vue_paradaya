import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SkillsView from "@/views/SkillsView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ContactView from "@/views/ContactView.vue";


const routes = [
  { path: '/', component: HomeView},
  { path: '/about',component: AboutView},
  { path: '/skills',component: SkillsView},
  { path: '/project',component: ProjectView},
  { path: '/contact', component: ContactView},
]
const router = createRouter ({
    history: createWebHistory(),
    routes,
    scrollBehavior(savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
}
});
export default router