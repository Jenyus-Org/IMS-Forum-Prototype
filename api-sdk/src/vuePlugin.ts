import _Vue from "vue";
import Client from "./client";

export default {
  install(Vue: typeof _Vue, options?: any) {
    let client: Client;
    if (options?.basePath) {
      client = new Client(options.basePath);
    } else {
      client = new Client();
    }

    Vue.prototype.$strapi = client;
  },
};
