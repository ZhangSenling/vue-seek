import request from '@/utils/request';

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  });
}

export function getTreeNode(query) {
  return request({
    url: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json',
    method: 'get',
    params: query
  });
}
