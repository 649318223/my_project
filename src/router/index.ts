import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Layout,
    redirect: '/home',
    children: [
      {
				path: '/home',
				name: 'Home',
        component: () =>import( "@/views/home/index.vue"),
				meta: {
					title: '首页',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: true,
					isIframe: false,
					roles: ['admin', 'common'],
					icon: 'iconfont icon-shouye',
				},
			},
      {
        path: "/about",
        name: "about",
        meta: {
					title: '关于',
					isLink: '',
					isHide: false,
					isKeepAlive: true,
					isAffix: false,
					isIframe: false,
					roles: ['admin'],
					icon: 'iconfont icon-xitongshezhi',
				},
        children: [
          {
            path: '/about',
            name: 'About',
            component: () =>import("../views/AboutView.vue"),
            meta: {
              title: '关于我们',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: true,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-shouye',
            },
          },
        ]
      },
    ]
  },

  // {
  //   path: "/",
  //   name: "home",
  //   component: Layout,
  //   redirect: '/home',
  //   children: [
	// 		{
	// 			path: '/home',
	// 			name: 'Home',
  //       component: () =>import( "@/views/home/index.vue"),
	// 			meta: {
	// 				title: '首页',
	// 				isLink: '',
	// 				isHide: false,
	// 				isKeepAlive: true,
	// 				isAffix: true,
	// 				isIframe: false,
	// 				roles: ['admin', 'common'],
	// 				icon: 'iconfont icon-shouye',
	// 			},
	// 		},
  //   ]
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: Layout,
  //   children: [
	// 		{
	// 			path: '/about',
	// 			name: 'About',
  //       component: () =>import("../views/AboutView.vue"),
	// 			meta: {
	// 				title: '首页',
	// 				isLink: '',
	// 				isHide: false,
	// 				isKeepAlive: true,
	// 				isAffix: true,
	// 				isIframe: false,
	// 				roles: ['admin', 'common'],
	// 				icon: 'iconfont icon-shouye',
	// 			},
	// 		},
  //   ]
  // },
];

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () =>import( "@/views/login/index.vue"),
    meta: {
      title: '登录',
      isHide: true,
    }
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes: [...staticRoutes, ...routes],
});

export default router;
