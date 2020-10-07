import Vue from "vue";
import Vuex from "vuex";
import http from "../http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topAnimes: [],
  },
  mutations: {
    setTopAnimes(state, data) {
      console.log(data);
      state.topAnimes = data.top;
    },
  },
  actions: {
    async getTopAnimeList(context) {
      const response = await http.get("/top/anime/1/upcoming");
      context.commit("setTopAnimes", response.data);
    },
  },
  modules: {},
});
