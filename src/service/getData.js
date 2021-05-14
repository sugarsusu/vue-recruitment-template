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
let checkLogin = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/login`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

/**
* 新增图书
* 参数：
* 参数名 必选 类型 说明
*/
let addBooks = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/books`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

/**
 *获取书籍信息
 *参数名 必选 类型 说明
 */
let getBooks = () => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/getBooks')

/**
 *切换页面书籍信息
 *参数名 必选 类型 说明
 */
let searchBookPages = (keywords) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/search?keywords=' + keywords)

/**
* 删除图书
* 参数：
* 参数名 必选 类型 说明
*/
let deleteBooks = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/delete`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

/**
 *分类获取书籍信息
 *参数名 必选 类型 说明
 */
let categoriesBooks = (cid) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/categories/' + cid + '/books')

/**
* 删除图书
* 参数：
* 参数名 必选 类型 说明
*/
let register = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/register`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })


/**
 * 退出登录-清除session接口
 */
let logout = () => axios.get(`http://192.168.43.98:8822http://192.168.43.98:8822/march/logout`);

/**
 * 用户信息修改
 * 字段
 */
 let userInfoEdit = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/user`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
/**
 * 用户信息查询
 * 字段
 */
 let userDetail = (username) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/userDetail?username=' + username);

 /**
 * 用户信息列表
 * 字段
 */
  let userList = () => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/user');

 /**
 * 角色列表
 * 字段
 */
  let roleList = () => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/role');
 /**
 * 删除用户
 * 字段
 */
  let deleUser = (id) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/deleUser?id='+id);
 /**
 * 重置密码
 * 字段
 */
  let resetPassword = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/password`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  

  let rolePerm = () => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/role/perm');
  
  let roleMenu = () => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/role/menu');
  
 /**
 * 添加角色
 * 字段
 */
  let addRole = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/role`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  


   /**
  * 
  * 首页职位区 
  */
 let recruitList = (params) => axios.get('http://192.168.43.98:8822/http://192.168.43.98:8822/march/recruitList',{params: params});

 /**
 * 修改状态
 * 
 */
 let statusUpdate = (data) => axios.put(`http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/userStatus`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  /**
 * 用户信息修改及分配角色
 * 
 */
let adminUserUpdate = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/admin/user`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
/**
 * 职位信息上传
 * 
 */
let recruitsUpdate = (data) => axios.put(`http://192.168.43.98:8822http://192.168.43.98:8822/march/updateRecruit`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
 
/* 删除职位列表
* 
*/
 let deleRecruit = (recruitId) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/deleRecruit?recruitId='+recruitId);

 /**
* HR管理的职位列表
*/
let hrPosition = (userId) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/getByhrIdList?hrId='+userId);

/**
* 我的推荐
*/
let myResumeInfo = (userId) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/getResumeInfoByUserId?userId='+userId);

 /*
 简历上传
  */
 let resumetAdd = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/resumeInfoAdd`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

 /*简历删除
 */
 let resumetDel = (resumeInfoId) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/deleResumeInfo?resumeInfoId='+resumeInfoId);

 // let resumetDel = (data) => axios.post(`http://192.168.43.98:8822/march/deleResumeInfo`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

 let recruitAdd = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/recruitAdd`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
/* 获取路由权限
* 
*/
let getMenu = () => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/menu');

/**
* 积分列表
*/
let pointsList = () => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/pointsList')

/**
 * 更改角色状态
 * 
 */
let roleStatusUpdate = (data) => axios.put(`http://192.168.43.98:8822http://192.168.43.98:8822/march/role/status`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
 
/**
 * 更改角色信息
 * 
 */
let roleInfoUpdate = (data) => axios.put(`http://192.168.43.98:8822/march/admin/role`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

/**
 * 更改角色路由
 * 
 */
let roleMenuUpdate = (rid,data) => axios.put(`http://192.168.43.98:8822/march/admin/role/menu?rid=`+rid,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
 /** 
* HR管理的简历列表
*/
let hrResumeList = (params) => axios.get(`http://192.168.43.98:8822/march/getByhrIdResumeList`,{params: params});
  
  export {
    checkLogin, addBooks, getBooks, searchBookPages, deleteBooks, categoriesBooks, register, logout,
    userInfoEdit, userDetail, userList, roleList, deleUser, resetPassword, rolePerm, roleMenu, addRole,
    recruitList, statusUpdate, recruitsUpdate, deleRecruit, recruitAdd, getMenu,resumetAdd,resumetDel,
    myResumeInfo,pointsList, adminUserUpdate, roleStatusUpdate, roleInfoUpdate, roleMenuUpdate,hrResumeList,hrPosition
  
  }