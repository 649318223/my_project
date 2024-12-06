import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () =>import( "@/views/login/index.vue"),
  },
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
					title: 'message.router.home',
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
  {
    path: "/about",
    name: "about",
    component: () =>import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
