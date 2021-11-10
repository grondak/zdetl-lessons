import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import SignUpOrIn from "../views/SignUpOrIn.vue";
import Manager from "../views/Manager.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/signuporin",
    name: "SignUpOrIn",
    component: SignUpOrIn,
  },
  {
    path: "/manager",
    name: "Manager",
    component: Manager,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
