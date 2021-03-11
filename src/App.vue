<template>
	<div class="container">
		<global-header :user="user" />
		<router-view />
		<global-footer />
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

// 组件
import GlobalHeader, { UserProps } from "./components/GlobalHeader/index.vue";
import GlobalFooter from "./components/GlobalFooter/index.vue";
interface DataList {
	user: UserProps;
}
export default defineComponent({
	name: "App",
	components: {
		GlobalHeader,
		GlobalFooter,
	},
	setup() {
		const dataList = reactive<DataList>({
			user: {
				isLogin: false,
				name: "angerige",
			},
		});
		return {
			...toRefs(dataList),
		};
	},
});
</script>
