import request from '@/utils/request'

export function getList(params) {
  return request({
    // url: '/vue-admin-template/table/list',
    url: 'http://10.3.20.27:8181/book/findById/2',
    method: 'get',
    params
  })
}
