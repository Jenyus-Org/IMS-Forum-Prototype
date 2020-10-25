import Vue from "vue";
import VueRouter from "vue-router";
import General from "../views/General";
import Home from "../views/Home";
import Tutorials from "../views/Tutorials";
import Tutorial from "../views/Tutorial";
import CreateTutorial from "../views/CreateTutorial";
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
        path: "/home",
        name: "home",
        component: Home
      },
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
        path: "/tutorials",
        name: "tutorials",
        component: Tutorials
      },
      {
        path: "/tutorials/:id",
        name:"tutorial",
        component: Tutorial
      },
      {
        path: "/create-tutorial",
        name: "create-tutorial",
        component: CreateTutorial
      },
      {
        path: "/user/:id",
        name: "user",
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
