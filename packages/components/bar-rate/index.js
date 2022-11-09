import BarRate from "./index.vue";

BarRate.install = (Vue) => {
  console.log("BarRate", BarRate);
  Vue.component(BarRate.name, BarRate);
};

export default BarRate;
