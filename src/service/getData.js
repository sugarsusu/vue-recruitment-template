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
// const path = require('path')
const checkLogin = (data) => axios.post(`http://192.168.43.98:8822/march/login`, JSON.stringify(data), {headers: { 'Content-Type': 'application/json' }})

/**
* 新增图书
* 参数：
* 参数名 必选 类型 说明
*/
const addBooks = (data) => axios.post(`http://192.168.43.98:8822/march/books`, JSON.stringify(data), {headers: { 'Content-Type': 'application/json' }})

/**
 *获取书籍信息
 *参数名 必选 类型 说明
 */
const getBooks = () => axios.get('http://192.168.43.98:8822/march/getBooks')


/**
* 删除图书
* 参数：
* 参数名 必选 类型 说明
*/
const deleteBooks = (data) => axios.post(`http://192.168.43.98:8822/march/delete`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })

/**
 *分类获取书籍信息
 *参数名 必选 类型 说明
 */
const categoriesBooks = (cid) => axios.get('http://192.168.43.98:8822http://192.168.43.98:8822/march/categories/' + cid + '/books')

/**
* 删除图书
* 参数：
* 参数名 必选 类型 说明
*/
const register = (data) => axios.post(`http://192.168.43.98:8822http://192.168.43.98:8822/march/register`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })


/**
 * 退出登录-清除session接口
 */
const logout = () => axios.get(`http://192.168.43.98:8822/march/logout`);

/**
 * 用户信息修改
 * 字段
 */
 const userInfoEdit = (data) => axios.post(`http://192.168.43.98:8822/march/admin/user`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
/**
 * 用户信息查询
 * 字段
 */
 const userDetail = (username) => axios.get('http://192.168.43.98:8822/march/admin/userDetail?username=' + username);

 /**
 * 用户信息列表
 * 字段
 */
  const userList = () => axios.get('http://192.168.43.98:8822/march/admin/user');

 /**
 * 角色列表
 * 字段
 */
  const roleList = () => axios.get('http://192.168.43.98:8822/march/admin/role');
 /**
 * 删除用户
 * 字段
 */
  const deleUser = (id) => axios.get('http://192.168.43.98:8822/march/admin/deleUser?id='+id);
 /**
 * 重置密码
 * 字段
 */
  const resetPassword = (data) => axios.post(`http://192.168.43.98:8822/march/admin/password`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  

  const rolePerm = () => axios.get('http://192.168.43.98:8822/march/admin/role/perm');
  
  const roleMenu = () => axios.get('http://192.168.43.98:8822/march/admin/role/menu');
  
 /**
 * 添加角色
 * 字段
 */
  const addRole = (data) => axios.post(`http://192.168.43.98:8822/march/admin/role`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  


   /**
  * 
  * 首页职位区 
  */
 const recruitList = (params) => axios.get('http://192.168.43.98:8822/march/recruitList',{params: params});

 /**
 * 修改状态
 * 
 */
const statusUpdate = (data) => axios.put(`http://192.168.43.98:8822/march/admin/userStatus`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  /**
 * 用户信息修改及分配角色
 * 
 */
const adminUserUpdate = (data) => axios.post(`http://192.168.43.98:8822/march/admin/user`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
/**
 * 职位信息上传
 * 
 */
const recruitsUpdate = (data) => axios.put(`http://192.168.43.98:8822/march/updateRecruit`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
 
/* 删除职位列表
* 
*/
 const deleRecruit = (recruitId) => axios.get('http://192.168.43.98:8822/march/deleRecruit?recruitId='+recruitId);

 /**
* HR管理的职位列表
*/
const hrPosition = (userId) => axios.get('http://192.168.43.98:8822/march/getByhrIdList?hrId='+userId);

/**
* 我的推荐
*/
const myResumeInfo = (userId) => axios.get('http://192.168.43.98:8822/march/getResumeInfoByUserId?userId='+userId);

 /*
 简历上传
  */
 const resumetAdd = (data) => axios.post(`http://192.168.43.98:8822/march/resumeInfoAdd`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

 /*简历删除
 */
 const resumetDel = (resumeInfoId) => axios.get('http://192.168.43.98:8822/march/deleResumeInfo?resumeInfoId='+resumeInfoId);

 // const resumetDel = (data) => axios.post(`http://192.168.43.98:8822/march/deleResumeInfo`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

 const recruitAdd = (data) => axios.post(`http://192.168.43.98:8822/march/recruitAdd`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
/* 获取路由权限
* 
*/
const getMenu = () => axios.get('http://192.168.43.98:8822/march/menu');

/**
* 积分列表
*/
const pointsList = () => axios.get('http://192.168.43.98:8822/march/pointsList')

/**
 * 更改角色状态
 * 
 */
const roleStatusUpdate = (data) => axios.put(`http://192.168.43.98:8822/march/role/status`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
 
/**
 * 更改角色信息
 * 
 */
const roleInfoUpdate = (data) => axios.put(`http://192.168.43.98:8822/march/admin/role`,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

/**
 * 更改角色路由
 * 
 */
const roleMenuUpdate = (rid,data) => axios.put(`http://192.168.43.98:8822/march/admin/role/menu?rid=`+rid,JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
 /** 
* HR管理的简历列表
*/
const hrResumeList = (params) => axios.get(`http://192.168.43.98:8822/march/getByhrIdResumeList`,{params: params});

 /** 
 * 获取我的积分
 */
 let pointsIdList = (params) => axios.get(`http://192.168.43.98:8822/march/pointsIdList`,{params: params});

export {
  checkLogin, addBooks, getBooks,  deleteBooks, categoriesBooks, register, logout,
  userInfoEdit, userDetail, userList, roleList, deleUser, resetPassword, rolePerm, roleMenu, addRole,
  recruitList, statusUpdate, recruitsUpdate, deleRecruit, recruitAdd, getMenu,resumetAdd,resumetDel,
  myResumeInfo,pointsList, adminUserUpdate, roleStatusUpdate, roleInfoUpdate, roleMenuUpdate,hrResumeList,hrPosition,
  pointsIdList

}