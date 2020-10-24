import { VuePlugin } from "api-sdk";
import Vue from "vue";

Vue.use(VuePlugin, {
  basePath: "http://localhost:8082"
});
