import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/axios";
import "./plugins/strapi";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faCogs,
  faHome,
  faChalkboard,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import "highlight.js/styles/atom-one-dark.css";

library.add(faUserSecret);
library.add(faCogs);
library.add(faHome);
library.add(faChalkboard);
library.add(faSearch);
library.add(faHeart);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
