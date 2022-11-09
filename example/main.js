import Vue from "vue";
import App from "./App.vue";
// import hsui from "../packages/hs-ui";
// import hsui from "../lib/hs-ui.common";
// Vue.use(hsui);
// import BarRate from "../packages/components/bar-rate";
import BarRate from "../lib/bar-rate/index";
console.log("BarRate", BarRate);
Vue.use(BarRate);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
