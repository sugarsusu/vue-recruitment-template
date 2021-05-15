import request from '@/utils/request'
export const login = data => request.post('march/login', data)

// export function login(data) {
//   return request({
//     url: 'http://192.168.43.98:8822/march/login',
//     method: 'post',
//     data
//   })
// }

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
