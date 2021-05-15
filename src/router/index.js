import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/Register',
    component: () => import('@/views/Register'),
    hidden: true
  },
  {
    path: '/newLogin',
    component: () => import('@/views/newLogin/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/detail/:recruitId',
    name: 'detail',
    component: () => import('@/views/人才推荐/detail.vue')
  },
  {
    path: '/ResumeDetail',
    name: 'ResumeDetail',
    component: () => import('@/views/ResumeUpload/ResumeDetail.vue')
  },
  {
    path: '/ResumeUpload',
    name: 'ResumeUpload',
    component: () => import('@/views/ResumeUpload/index.vue')
  },
  { 
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/人才推荐/职位列表.vue'),
      // meta: { title: '职位区', icon: 'dashboard' }
      meta: { title: '职位区', icon: 'job' }
    }]
  },
  // {
  //   path: '/index',
  //   component: Layout,
  //   redirect: '/index/positionList',
  //   children: [{
  //     path: 'positionList',
  //     name: 'Dashboard',
  //     component: () => import('@/views/人才推荐/职位列表.vue'),
  //     // meta: { title: '职位区', icon: 'dashboard' }
  //     meta: { title: '职位区', icon: 'job' }
  //   }]
  // },

  { 
    path: '/example',
    component: Layout,
    redirect: '/example/myRecommend',
    name: 'Example',
    // meta: { title: '例如', icon: 'el-icon-s-help' },
    meta: { title: '个人中心', icon: 'recommend' },
    children: [
      {
        path: 'myRecommend',
        name: 'myRecommend',
        component: () => import('@/views/人才推荐/我的推荐.vue'),
        // meta: { title: 'Table', icon: 'table' }
        meta: { title: '我的推荐' }
      },
      {
        path: 'myPoints',
        name: 'myPoints',
        component: () => import('@/views/人才推荐/我的积分.vue'),
        // meta: { title: 'Tree', icon: 'tree' }
        meta: { title: '我的积分' }
      }
    ]
    },


  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   // meta: { title: '例如', icon: 'el-icon-s-help' },
  //   meta: { title: '我的推荐', icon: 'recommend' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       // meta: { title: 'Table', icon: 'table' }
  //       meta: { title: 'Table已面试' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       // meta: { title: 'Tree', icon: 'tree' }
  //       meta: { title: 'Tree未面试' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       // meta: { title: '表单', icon: 'form' }
  //       meta: { title: '积分商城', icon: 'integral-mall' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   // meta: {
  //   //   title: '不知道Nested',
  //   //   icon: 'nested'
  //   // },
  //   meta: {
  //     title: '不知道Nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://element.eleme.cn/2.0/#/es',
  //       meta: { title: '外部链接', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
