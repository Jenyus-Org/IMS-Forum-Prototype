import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeNav: true,
  },
  mutations: {
    commitNavVisibility(state, data){
      state.activeNav = data;
    }
  },
  actions: {
    changeNavVisibility(context, data){
      context.commit("commitNavVisibility", data);
    }
  },
  getters: {},
  modules: {},
});
