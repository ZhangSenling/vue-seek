const r = require.context('./routePages', true, /.vue/);
const arr = [];
r.keys().forEach((key) => {
  const keyArr = key.split('.');
  // index是该模块主页入口
  if (key.indexOf('index') !== -1) {
    arr.push({
      path: keyArr[1],
      component: r(key).default
    });
  } else {
    arr.push({
      path: `${keyArr[1]}/${keyArr[2]}`,
      component: r(key).default
    });
  }
});

export default arr;
