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
  faPaw,
  faPlus,
  faCode,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
library.add(faCogs);
library.add(faHome);
library.add(faChalkboard);
library.add(faSearch);
library.add(faHeart);
library.add(faPaw);
library.add(faPlus);
library.add(faCode);
library.add(faEdit);
library.add(faSave);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
