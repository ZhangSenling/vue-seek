# 前言

> 1、如何批量处理路由，免得手写太多代码；2、如何预打包第三方库，以免每次打包浪费太长时间；3、全局注册vue组件；4、换肤功能

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8018
npm run dev

# 预打包第三方库(在webpack.dll.js中进行配置，目前是vue,vue-router,axios,@antv/g6)
npm run dll

# 打包文件，如果第三方库有所改动，则应该先打包第三方库再打包项目
npm run build

# 格式化代码
npm run lint

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 技术栈

vue2 + vuex + vue-router + webpack + ES6 + mock + sass + axios + antv/g6

# 项目布局

```
├─build                             // webpack配置文件
├─config                            // 基本配置
├─mock                              // 前端模拟数据，如果有新建文件，需要在index.js进行导入
│      index.js
│      test.js
├─src
│  │  App.vue                       // 页面入口
│  │  main.js                       // 项目入口文件
│  ├─api                            // 与后端对接接口的文件都写在此文件夹下面
│  ├─assets                         // 一些静态资源
│  │      logo.png
│  ├─components                     // 全局组件
│  │      Demo.vue
│  │      HelloWorld.vue
│  │      index.js                  // 在此文件中进行全局注册，包括element按需导入的组件
│  ├─router
│  │      index.js
│  ├─store                          // 状态管理，在modules文件夹中进行分模块管理
│  │  │  getters.js
│  │  │  index.js                   // 对modules文件夹下的所有模块进行注册，因此无需手动导入
│  │  └─modules                     // /store/index.js中已经对其下子文件进行处理
│  │          test.js   
│  ├─style
│  │  │  element.scss               // 重写element样式
│  │  │  index.scss                 // 全局样式控制
│  │  │  mixin.scss                 // sass混合指令
│  │  │  transition.scss            // 动画效果样式
│  │  │  var.scss                   // 所有sass变量
│  │  │  
│  │  ├─image                       // 默认主题的图片
│  │  └─image-theme1                // 主题1
│  ├─utils
│  │      auth.js                   // 角色权限管理
│  │      index.js                  // 常用工具方法，使用export导出方法
│  │      request.js                // 接口拦截
│  │      
│  └─views
│      ├─mode1
│      │  │  index.route.js         // 当前模块的路由控制
│      │  │  
│      │  ├─components
│      │  └─pages                   // 无需设置路由跳转的页面
│      │          testVue.vue       // 遵循小驼峰式命名
│      │  └─routePages              // 注意命名规则，xx.index.vue则是当前模块入口
│      │          mode1.index.vue   // 路由路径为：/mode1
│      │          mode1.second.vue  // 路由路径为：/mode1/second/
│      │          testVue.vue       // 该文件不应该写在此处
│      └─mode2
│                  
├─static                            // 第三方库打包输出文件夹
│  │  .gitkeep
│  │  
│  └─js
│          vendor.dll.js
│          
└─test                              // 单元测试
```
