import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store";

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
	{
		path: "/createpost",
		name: "CreatePost",
		component: () => import("@/views/CreatePost.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	/* must call `next` */
	if (to.name !== "Login" && !store.state.user.isLogin) {
		next({ name: "Login" });
	} else {
		next();
	}
});

export default router;
