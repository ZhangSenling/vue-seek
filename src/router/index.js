import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);
// 这种导入路由的方法自然是不支持懒加载了
const r = require.context('../views', true, /\.route\.js/);
let arr = [];
r.keys().forEach((item) => {
  arr = arr.concat(r(item).default);
});
console.log(arr);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...arr
  ]
});
