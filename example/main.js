import Vue from "vue";
import App from "./App.vue";
// import hsui from "../packages/hs-pro";
import hsui from "../lib/hs-pro.common";
Vue.use(hsui);
// import BarRate from "../packages/components/bar-rate";
// import HsLayout from "../lib/hs-layout/index";
// import "../lib/hs-layout/style.css";
// Vue.use(HsLayout);
// import hsPagination from "../lib/hs-pagination/index";
// Vue.use(hsPagination);
// import HsBreadcrumb from "../lib/hs-breadcrumb/index";
// import "../lib/hs-breadcrumb/style.css";
// Vue.use(HsBreadcrumb);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
