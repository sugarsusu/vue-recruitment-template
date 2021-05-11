import axios from 'axios'

// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// axios.interceptors.request.use((config) => {
//   // 在发送请求之前做些什么
//   return config
// }, (error) => {
//   // 对请求错误做些什么
//   return Promise.reject(error)
// })

/**
* 登录请求
* 参数：
* 参数名 必选 类型 说明
*/
const path = require('path')
let checkLogin = (data) => axios.post(`http://10.1.134.84:4001/march/login`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

/**
* 新增图书
* 参数：
* 参数名 必选 类型 说明
*/
let addBooks = (data) => axios.post(`http://10.1.134.84:4001/march/books`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

/**
 *获取书籍信息
 *参数名 必选 类型 说明
 */
let getBooks = () => axios.get('http://10.1.134.84:4001/march/getBooks')

/**
 *切换页面书籍信息
 *参数名 必选 类型 说明
 */
let searchBookPages = (keywords) => axios.get('http://10.1.134.84:4001/march/search?keywords=' + keywords)

/**
* 删除图书
* 参数：
* 参数名 必选 类型 说明
*/
let deleteBooks = (data) => axios.post(`http://10.1.134.84:4001/march/delete`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

/**
 *分类获取书籍信息
 *参数名 必选 类型 说明
 */
let categoriesBooks = (cid) => axios.get('http://10.1.134.84:4001/march/categories/' + cid + '/books')

/**
* 删除图书
* 参数：
* 参数名 必选 类型 说明
*/
let register = (data) => axios.post(`http://10.1.134.84:4001/march/register`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })


/**
 * 退出登录-清除session接口
 */
let logout = () => axios.get(`http://10.1.134.84:4001/march/logout`);

/**
 * 用户信息修改
 * 字段
 */
 let userInfoEdit = (data) => axios.post(`http://10.1.134.84:4001/march/admin/user`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
/**
 * 用户信息查询
 * 字段
 */
 let userDetail = (username) => axios.get('http://10.1.134.84:4001/march/admin/userDetail?username=' + username);

 /**
 * 用户信息列表
 * 字段
 */
  let userList = () => axios.get('http://10.1.134.84:4001/march/admin/user');

 /**
 * 角色列表
 * 字段
 */
  let roleList = () => axios.get('http://10.1.134.84:4001/march/admin/role');
 /**
 * 删除用户
 * 字段
 */
  let deleUser = (id) => axios.get('http://10.1.134.84:4001/march/admin/deleUser?id='+id);
 /**
 * 重置密码
 * 字段
 */
  let resetPassword = (data) => axios.post(`http://10.1.134.84:4001/march/admin/password`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  

  let rolePerm = () => axios.get('http://10.1.134.84:4001/march/admin/role/perm');
  
  let roleMenu = () => axios.get('http://10.1.134.84:4001/march/admin/role/menu');
  
 /**
 * 添加角色
 * 字段
 */
  let addRole = (data) => axios.post(`http://10.1.134.84:4001/march/admin/role`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  
  let recruitList = () => axios.get('http://10.1.134.84:4001/march/recruitList');

  
export {
  checkLogin, addBooks, getBooks, searchBookPages, deleteBooks, categoriesBooks, register, logout,
  userInfoEdit, userDetail, userList, roleList, deleUser, resetPassword, rolePerm, roleMenu, addRole,
  recruitList

}
