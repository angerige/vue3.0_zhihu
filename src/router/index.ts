import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/Home.vue"),
	},
	{
		path: "/column/:id",
		name: "Column",
		component: () => import("@/views/ColumnDetail.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/Login.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
