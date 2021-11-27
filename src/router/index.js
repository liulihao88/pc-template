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
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/componentsPage',
    name: 'ComponentsPage',
    meta: { title: 'ele封装公共组件', icon: 'dashboard' },
    children: [{
      path: 'componentsPage',
      name: 'ComponentsPage',
      component: () => import('@/views/componentsPage/index'),
      meta: { title: 'element封装公共组件', icon: 'dashboard' }
    },
    {
      path: 'jsFunc',
      name: 'JsFunc',
      component: () => import('@/views/componentsPage/jsFunc'),
      meta: { title: 'js函数', icon: 'dashboard' }
    },
    {
      path: 'directivesPage',
      name: 'DirectivesPage',
      component: () => import('@/views/componentsPage/directivesPage'),
      meta: { title: 'directives自定义指令', icon: 'dashboard' }
    },
    {
      path: 'filtersPage',
      name: 'FiltersPage',
      component: () => import('@/views/componentsPage/filtersPage'),
      meta: { title: 'filters过滤器', icon: 'dashboard' }
    },
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: '/htmlCssPage',
    component: Layout,
    redirect: '/htmlCssPage/htmlPage',
    name: 'Test1',
    meta: {
      title: 'html和css',
      icon: 'nested'
    },
    children: [
      {
        path: 'htmlPage',
        component: () => import('@/views/htmlCssPage/htmlPage'), // Parent router-view
        meta: { title: 'html页面' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: '/test',
    component: Layout,
    redirect: '/test/test1',
    // name: 'Test1',
    meta: {
      title: '测试页面',
      icon: 'nested'
    },
    children: [
      {
        path: 'test1',
        component: () => import('@/views/testPage/test1'), // Parent router-view
        meta: { title: '测试1', icon: 'dashboard' },
      },
      // {
      //   path: 'menu2',
      //   component: () => import('@/views/nested/menu2/index'),
      //   name: 'Menu2',
      //   meta: { title: 'menu2' }
      // }
    ]
  },

  {
    path: '/exercise',
    component: Layout,
    redirect: '/exercise/index',
    // name: 'Test1',
    meta: {
      title: '练习',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/exercise/index'), // Parent router-view
        meta: { title: '练习', icon: 'dashboard' },
      },
      // {
      //   path: 'menu2',
      //   component: () => import('@/views/nested/menu2/index'),
      //   name: 'Menu2',
      //   meta: { title: 'menu2' }
      // }
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
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
