import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "common/stylus/index.styl";
import Cube from "cube-ui";
import VueLazyload from "vue-lazyload";

Vue.use(Cube);
Vue.use(VueLazyload, {
  loading: require("common/image/default.png")
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
