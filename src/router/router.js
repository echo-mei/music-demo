import Vue from "vue";
import Router from "vue-router";
import MRecommend from "views/m-recommend/m-recommend";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: { name: "recommend" }
    },
    {
      path: "/recommend",
      name: "recommend",
      component: MRecommend
    },
    {
      path: "/singer",
      name: "singer",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "singer" */ "views/m-singer/m-singer.vue")
    },
    {
      path: "/rank",
      name: "rank",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "rank" */ "views/m-rank/m-rank.vue")
    },
    {
      path: "/search",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "search" */ "views/m-search/m-search.vue")
    }
  ]
});
