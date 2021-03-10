<template>
	<div class="container">
		<global-header :user="user" />
		<form>
			<div class="mb-3">
				<label class="form-label">Email address</label>
				<validate-input :rules="emailRules" />
			</div>

			<div class="mb-3 form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1" />
				<label class="form-check-label" for="exampleCheck1">Check me out</label>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
		<!-- <column-list :list="list" /> -->
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
// 图片
import logoImg from "@/assets/logo.png";
// 组件
import ColumnList, { ColumnProps } from "./components/ColumnList/index.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader/index.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput/index.vue";

interface DataList {
	list: Array<ColumnProps>;
	user: UserProps;
}

export default defineComponent({
	name: "App",
	components: {
		ColumnList,
		GlobalHeader,
		ValidateInput,
	},
	setup() {
		const emailRules: RulesProp = [
			{ type: "required", message: "电子邮件地址不能为空" },
			{ type: "email", message: "请输入正确的电子邮箱" },
		];

		const dataList = reactive<DataList>({
			list: [
				{
					id: 1,
					title: "test1的专栏",
					description:
						"test1的专栏test1的专栏test1的专栏test1的专栏test1的专栏",
				},
				{
					id: 2,
					title: "test2的专栏",
					description:
						"test1的专栏test1的专栏test1的专栏test1的专栏test1的专栏",
					avatar: logoImg,
				},
				{
					id: 3,
					title: "test2的专栏",
					description:
						"test1的专栏test1的专栏test1的专栏test1的专栏test1的专栏",
					avatar: logoImg,
				},
				{
					id: 4,
					title: "test2的专栏",
					description:
						"test1的专栏test1的专栏test1的专栏test1的专栏test1的专栏",
				},
			],
			user: {
				isLogin: true,
				name: "angerige",
			},
		});

		return {
			...toRefs(dataList),
			emailRules,
		};
	},
});
</script>

<style></style>
