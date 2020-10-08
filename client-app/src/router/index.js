import Vue from "vue";
import VueRouter from "vue-router";
import General from "../views/General";
import Settings from "../views/Settings";
import SignIn from "../views/SignIn";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
