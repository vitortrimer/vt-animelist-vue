import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details/:type/:id",
    name: "Details",
    component: Details
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
