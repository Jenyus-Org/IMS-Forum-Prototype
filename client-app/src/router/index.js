import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Forum from "../views/Forum";
import Home from "../views/Home";
import Internships from "../views/Internships";
import Post from "../views/Post";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import SubmitTutorial from "../views/SubmitTutorial";
import Tutorial from "../views/Tutorial";
import Tutorials from "../views/Tutorials";
import Tutoring from "../views/Tutoring";
import User from "../views/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/forum",
    name: "forum",
    component: Forum,
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
  },
  {
    path: "/tutorials",
    name: "tutorials",
    component: Tutorials,
  },
  {
    path: "/tutorials/submit",
    name: "submitTutorial",
    component: SubmitTutorial,
  },
  {
    path: "/tutorials/:id",
    name: "tutorial",
    component: Tutorial,
  },
  {
    path: "/internships",
    name: "internships",
    component: Internships,
  },
  {
    path: "/tutoring",
    name: "tutoring",
    component: Tutoring,
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "register",
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
