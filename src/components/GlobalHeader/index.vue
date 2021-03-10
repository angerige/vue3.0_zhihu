<template>
	<nav class="navbar navbar-dark bg-dark justify-content-between mb-4 px-4">
		<!-- Navbar content -->
		<a class="navbar-brand" href="#">专栏 </a>
		<ul v-if="!user.isLogin" class="list-inline mb-0">
			<li class="list-inline-item">
				<a href="#" class="btn btn-outline-light my-2">登陆</a>
			</li>
			<li class="list-inline-item">
				<a href="#" class="btn btn-outline-light my-2">注册</a>
			</li>
		</ul>
		<ul v-else class="list-inline mb-0">
			<li class="list-inline-item">
				<dropdown :title="user.name">
					<dropdown-item>
						<a href="#" class="dropdown-item">新建文章</a>
					</dropdown-item>
					<dropdown-item disabled>
						<a href="#" class="dropdown-item">编辑资料</a>
					</dropdown-item>
					<dropdown-item>
						<a href="#" class="dropdown-item">退出登陆</a>
					</dropdown-item>
				</dropdown>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

import Dropdown from "../Dropdown/index.vue";
import DropdownItem from "../Dropdown/Item.vue";

export interface UserProps {
	isLogin: boolean;
	name?: string;
	id?: number;
}

export default defineComponent({
	name: "GlobalHeader",
	props: {
		user: {
			type: Object as PropType<UserProps>,
			required: true,
		},
	},
	components: {
		Dropdown,
		DropdownItem,
	},
});
</script>

<style scoped></style>
