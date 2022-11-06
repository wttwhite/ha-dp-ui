import NameValue from './index.vue';

NameValue.install = function (Vue) {
  Vue.component (NameValue.name, NameValue);
};

export default NameValue;