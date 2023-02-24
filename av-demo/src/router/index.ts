import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/index1",
    name: "index1",
    component: import.meta.glob("../pages/index1.vue")["../pages/index1.vue"],
  },
  {
    path: "/index2",
    name: "index2",
    component: import.meta.glob("../pages/index2.vue")["../pages/index2.vue"],
  },
  {
    path: "/index3",
    name: "index3",
    component: import.meta.glob("../pages/index3.vue")["../pages/index3.vue"],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    redirect: "/index1",
  },
];
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
