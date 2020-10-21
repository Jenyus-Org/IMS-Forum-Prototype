import Vue from "vue";
import VueRouter from "vue-router";
import General from "../views/General";
import Tutorial from "../views/Tutorials";
import Settings from "../views/Settings";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "General",
    component: General,
    children: [
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/tutorial",
        name: "tutorial",
        component: Tutorial
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
      },
    ],
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "Register",
    component: SignUp
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
