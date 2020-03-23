// import Mock from 'mockjs';
// // import { param2Obj } from '../src/utils';

// import role from './role';
// import test from './test';

// const mocks = [
//   ...role,
//   ...test
// ];

// // export function mockXHR(...args) {
// //   // mock patch
// //   // https://github.com/nuysoft/Mock/issues/300
// //   Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
// //   Mock.XHR.prototype.send = () => {
// //     if (this.custom.xhr) {
// //       this.custom.xhr.withCredentials = this.withCredentials || false;

// //       if (this.responseType) {
// //         this.custom.xhr.responseType = this.responseType;
// //       }
// //     }
// //     this.proxy_send(...args);
// //   };

// //   function XHR2ExpressReqWrap(respond) {
// //     return (options) => {
// //       let result = null;
// //       if (respond instanceof Function) {
// //         const { body, type, url } = options;
// //         // https://expressjs.com/en/4x/api.html#req
// //         result = respond({
// //           method: type,
// //           body: JSON.parse(body),
// //           query: param2Obj(url)
// //         });
// //       } else {
// //         result = respond;
// //       }
// //       return Mock.mock(result);
// //     };
// //   }

// //   for (const i of mocks) {
// //     Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response));
// //   }
// // }

// // for mock server
// const responseFake = (url, type, respond) => ({
//   url,
//   type: type || 'get',
//   response(req, res) {
//     res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond));
//   }
// });
// console.log(mocks.map(route => responseFake(route.url, route.type, route.response)));
// export default mocks.map(route => responseFake(route.url, route.type, route.response));


import Mock from 'mockjs';
// import * as loginAPI from './login';
import * as testAPI from './test';

Mock.setup({
  timeout: '300-600'
});

Mock.mock('/article/list', 'get', testAPI.mergeTableData);
// // 登录相关接口
// Mock.mock('/login/login', 'post', loginAPI.login);
// Mock.mock('/login/logout', 'post', loginAPI.logout);

// // 用户信息相关接口
// Mock.mock('/user/getInfo', 'post', userAPI.pullUserInfo);

// // 首页 homepage 相关的接口
// Mock.mock('/homepage/hometotal', 'post', homepageAPI.getHomeTotal);
// // 首页 homepageDetailItem 接口
// Mock.mock('/homepage/detailItem', 'post', homepageAPI.getHomeDetailItem);
// // 首页 investmentRank 接口
// Mock.mock('/homepage/investmentRank', 'post', homepageAPI.getHomeInvestmentRank);

export default Mock;
