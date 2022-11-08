const requireComponent = require.context(
  // 其组件目录的相对路径
  "./",
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /index.js$/
);

let componentList = [];

requireComponent.keys().forEach((fileName) => {
  // 获取组件配置
  let componentConfig = requireComponent(fileName);
  // 如果这个组件选项是通过 `export default` 导出的，
  // 那么就会优先使用 `.default`，
  // 否则回退到使用模块的根。
  componentList.push(componentConfig.default || componentConfig);
});

const install = (Vue) => {
  // 判断是否安装过
  if (install.installed) return;

  // 注册所有组件
  componentList.map((component) => {
    Vue.use(component);
  });
};
import BarRate from "./components/bar-rate/index";
console.log("componentList", componentList);

export default {
  install,
};
