import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faCogs, faHome} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret)
library.add(faCogs)
library.add(faHome)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
