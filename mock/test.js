// import Mock from 'mockjs';

// const List = [];
// const count = 100;

// const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
// const imgUri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3';

// for (let i = 0; i < count; i++) {
//   List.push(Mock.mock({
//     id: '@increment',
//     timestamp: +Mock.Random.date('T'),
//     author: '@first',
//     reviewer: '@first',
//     title: '@title(5, 10)',
//     content_short: 'mock data',
//     content: baseContent,
//     forecast: '@float(0, 100, 2, 2)',
//     importance: '@integer(1, 3)',
//     'type|1': ['CN', 'US', 'JP', 'EU'],
//     'status|1': ['published', 'draft', 'deleted'],
//     display_time: '@datetime',
//     comment_disabled: true,
//     pageviews: '@integer(300, 5000)',
//     imgUri,
//     platforms: ['a-platform']
//   }));
// }

// export default [
//   {
//     url: '/article/list',
//     type: 'get',
//     response: (config) => {
//       const {
//         importance,
//         type,
//         title,
//         page = 1,
//         limit = 20,
//         sort
//       } = config.query;

//       let mockList = List.filter((item) => {
//         if (importance && item.importance !== +importance) return false;
//         if (type && item.type !== type) return false;
//         if (title && item.title.indexOf(title) < 0) return false;
//         return true;
//       });

//       if (sort === '-id') {
//         mockList = mockList.reverse();
//       }

//       const pageList = mockList.filter(
//         (item, index) => index < limit * page && index >= limit * (page - 1)
//       );
//       console.log(pageList);

//       return {
//         code: 20000,
//         data: {
//           total: mockList.length,
//           items: pageList
//         }
//       };
//     }
//   }
//   // mockData() {
//   //   const userInfo = Mock.mock({
//   //     'data|10': [
//   //       {
//   //         'id|+1': 1,
//   //         name: '@ctitle(2,10)',
//   //         avatar: "@image('600x600',@color)",
//   //         'gender|1': true,
//   //         'age|18-25': 20
//   //       }
//   //     ]
//   //   });
//   //   // 模拟删除数据
//   //   Mock.mock('/api/userInfo/deleteUser', 'delete', (options) => {
//   //     const id = parseInt(JSON.parse(options.body).id);
//   //     userInfo.data = userInfo.data.filter(item => item.id !== id);
//   //     return userInfo.data;
//   //   });
//   //   // 模拟查询数据
//   //   Mock.mock('/api/web/itemPrice/findFinalPriceOfferPage', 'get', () => userInfo.data);
//   //   // 模拟更新数据
//   //   Mock.mock('/api/userInfo/updateUser', 'post', (options) => {
//   //     const obj = JSON.parse(options.body);
//   //     userInfo.data = userInfo.data.map(item => (item.id === obj.id ? obj : item));
//   //     return userInfo.data;
//   //   });
//   //   // 模拟添加数据
//   //   Mock.mock('/api/userInfo/addUser', 'post', (options) => {
//   //     const obj = JSON.parse(options.body);
//   //     obj.id = userInfo.data.length + 1;
//   //     userInfo.data.push(obj);
//   //     return userInfo.data;
//   //   });
//   // }
// ];

import Mock from 'mockjs';

const count = 30;
const mergeTableData = [];
for (let i = 0; i < count; i++) {
  mergeTableData.push(Mock.mock({
    name: '@cname()',
    total: '@natural(500, 1000)',
    passcount: '@natural(1, 499)',
    compRatio: '',
    notdo: '@natural(1, 100)',
    doing: '@natural(50, 200)',
    voertime: '@natural(1, 100)',
    getover: '@natural(100, 200)',
    implementRatio: ''
  }));
}

mergeTableData.forEach((data) => {
  data.compRatio = `${data.passcount}/${data.total}`;
  data.implementRatio = `${data.getover}/${data.total}`;
});

export { mergeTableData };
