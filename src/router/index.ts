import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/english-literacy-course",
    name: "EnglishLiteracyCourse",
    component: () => import("@/views/englishLiteracyCourse/index.vue"),
  },
  {
    path: "/level-examination",
    name: "LevelExamination",
    component: () => import("@/views/levelExamination/index.vue"),
  },
  {
    path: "/insert-class",
    name: "InsertClass",
    component: () => import("@/views/insertClass/index.vue"),
  },
  {
    path: "/studying-abroad",
    name: "StudyingAbroad",
    component: () => import("@/views/studyingAbroad/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash };
    }

    return { top: 0 };
  },
});

export default router;
