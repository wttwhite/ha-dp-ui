import Vue from "vue";
import App from "./App.vue";
// import hsui from "../packages/hs-ui";
// import hsui from "../lib/hs-ui.common";
// Vue.use(hsui);
import barRate from "../lib/bar-rate";
Vue.use(barRate);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
