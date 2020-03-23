// 全局注册组件
import { Button, Select, Option } from 'element-ui';
import Demo from './Demo';

const components = {
  Demo
};

const elementCom = {
  Button,
  Select,
  Option
};
const common = {
  install(Vue) {
    const keys = Object.keys(components);
    keys.forEach((item) => {
      Vue.component(item, components[item]);
    });
    const eleKeys = Object.keys(elementCom);
    eleKeys.forEach((ele) => {
      console.log(elementCom[ele]);
      Vue.component(elementCom[ele].name, elementCom[ele]);
    });
  }
};

export default common;
