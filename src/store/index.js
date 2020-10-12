import Vue from "vue";
import Vuex from "vuex";
import http from "../http";

Vue.use(Vuex);

function getToday() {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const now = new Date();
  return days[now.getDay()]
}

export default new Vuex.Store({
  state: {
    topAnimes: [],
    topAiringAnimes: [],
    topMangas: [],
    todayAnimes: []
  },
  mutations: {
    setTopAnimes(state, data) {
      state.topAnimes = data.top;
    },
    setTopAiringAnimes(state, data) {
      state.topAiringAnimes = data.top
    },
    setTopMangas(state, data) {
      state.topMangas = data.top
    },
    setTodayAnimes(state, data) {
      state.todayAnimes = data[getToday().toLowerCase()]
    }
  },
  actions: {
    async getTopAnimeList(context) {
      const response = await http.get("/top/anime/1/upcoming");
      context.commit("setTopAnimes", response.data);
    },
    async getTopAiringAnimes(context) {
      const response = await http.get("/top/anime/1/airing")
      context.commit("setTopAiringAnimes", response.data)
    },
    async getTopMangas(context) {
      const response = await http.get("/top/manga")
      context.commit("setTopMangas", response.data)
    },
    async getTodayAnimes(context, today) {
      const response = await http.get(`/schedule/${today}`)
      context.commit("setTodayAnimes", response.data)
    }
  },
  modules: {},
});
