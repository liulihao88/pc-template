import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

/* Layout */
import Layout from "@/layout"

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes collection mode, otherwise not show the root menu
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
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/componentsPage",
    name: "ComponentsPage",
    meta: { title: "ele封装公共组件", icon: "dashboard" },
    children: [
      {
        path: "componentsPage",
        name: "ComponentsPage",
        component: () => import("@/views/componentsPage/index"),
        meta: { title: "element封装公共组件", icon: "dashboard" },
      },
      {
        path: "jsFunc",
        name: "JsFunc",
        component: () => import("@/views/componentsPage/jsFunc"),
        meta: { title: "js函数", icon: "dashboard" },
      },
      {
        path: "directivesPage",
        name: "DirectivesPage",
        component: () => import("@/views/componentsPage/directivesPage"),
        meta: { title: "directives自定义指令", icon: "dashboard" },
      },
      {
        path: "filtersPage",
        name: "FiltersPage",
        component: () => import("@/views/componentsPage/filtersPage"),
        meta: { title: "filters过滤器", icon: "dashboard" },
      },
      {
        path: "singleExample",
        name: "SingleExample",
        component: () => import("@/views/componentsPage/singleExample"),
        meta: { title: "单例模式", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/collection",
    component: Layout,
    redirect: "/collection/menu1",
    name: "Collection",
    meta: {
      title: "收藏的页面",
      icon: "dashboard",
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/collection/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/collection/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" },
          },
          {
            path: "menu1-2",
            component: () => import("@/views/collection/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/collection/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" },
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/collection/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" },
              },
            ],
          },
          {
            path: "menu1-3",
            component: () => import("@/views/collection/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" },
          },
        ],
      },
      {
        path: "notFoundPage",
        component: () => import("@/views/collection/notFoundPage/index"),
        name: "NotFoundPage",
        meta: { title: "未找到404" },
      },
    ],
  },

  {
    path: "/htmlCssPage",
    component: Layout,
    redirect: "/htmlCssPage/htmlPage",
    name: "Test1",
    meta: {
      title: "html和css",
      icon: "dashboard",
    },
    children: [
      {
        path: "htmlPage",
        component: () => import("@/views/htmlCssPage/htmlPage"), // Parent router-view
        meta: { title: "html页面" },
      },
      {
        path: "notFoundPage",
        component: () => import("@/views/collection/notFoundPage/index"),
        name: "NotFoundPage",
        meta: { title: "notFoundPage" },
      },
      {
        path: "changeBody",
        component: () => import("@/views/htmlCssPage/changeBody"),
        name: "ChangeBody",
        meta: { title: "换肤" },
      },
      {
        path: "scroll",
        component: () => import("@/views/htmlCssPage/scroll"),
        name: "Scroll",
        meta: { title: "滚动" },
      },
      {
        path: "validateForm",
        component: () => import("@/views/htmlCssPage/validateForm"),
        name: "ValidateForm",
        meta: { title: "动态验证表单" },
      },
    ],
  },

  {
    path: "/form",
    component: Layout,
    redirect: "/formValid",
    // name: 'Test1',
    meta: {
      title: "表单相关",
      icon: "collection",
    },
    children: [
      {
        path: "/formValid",
        component: () => import("@/views/form/formValid"), // Parent router-view
        meta: { title: "表单", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/test",
    component: Layout,
    redirect: "/test/t1",
    // name: 'Test1',
    meta: {
      title: "测试1",
      icon: "collection",
    },
    children: [
      {
        path: "t1",
        component: () => import("@/views/testPage/t1"), // Parent router-view
        meta: { title: "测试1", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/t2",
    component: Layout,
    redirect: "/test/t2",
    // name: 'Test1',
    meta: {
      title: "测试2",
      icon: "collection",
    },
    children: [
      {
        path: "t2",
        component: () => import("@/views/testPage/t2"), // Parent router-view
        meta: { title: "测试2", icon: "dashboard" },
      },
    ],
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
  { path: "*", redirect: "/404", hidden: true },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
