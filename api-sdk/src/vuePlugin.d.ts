import Vue from "vue";
import Client from "./client/client";

declare module "vue/types/vue" {
  interface Vue {
    $strapi: Client;
  }
}
