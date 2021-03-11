<template>
	<div class="container">
		<global-header :user="user" />
		<router-view />
		<global-footer />
		<!-- <validate-form @form-submit="onFormSubmit">
			<div class="mb-3">
				<label class="form-label">Email address</label>
				<validate-input
					:rules="formRules.emailRules"
					v-model="email"
					type="text"
					placeholder="请输入邮箱地址"
					ref="inputRef"
				/>
			</div>

			<div class="mb-3">
				<label class="form-label">Password</label>
				<validate-input
					:rules="formRules.passwordRules"
					v-model="password"
					type="password"
					placeholder="请输入密码"
				/>
			</div>

			<div class="mb-3 form-check">
				<input type="checkbox" class="form-check-input" id="exampleCheck1" />
				<label class="form-check-label" for="exampleCheck1">Check me out</label>
			</div>

			<template #submit>
				<span class="btn btn-danger">Submit</span>
			</template>
		</validate-form> -->
		<!-- <column-list :list="list" /> -->
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
// 图片
import logoImg from "@/assets/logo.png";
// 组件
import ColumnList, { ColumnProps } from "./components/ColumnList/index.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader/index.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput/index.vue";
import ValidateForm from "./components/ValidateForm/index.vue";
import GlobalFooter from "./components/GlobalFooter/index.vue";

interface DataList {
	list: Array<ColumnProps>;
	user: UserProps;
}

interface formRules {
	emailRules: RulesProp;
	passwordRules: RulesProp;
}

export default defineComponent({
	name: "App",
	components: {
		ColumnList,
		GlobalHeader,
		ValidateInput,
		ValidateForm,
		GlobalFooter,
	},
	setup() {
		const formData = reactive({
			email: "",
			password: "",
		});

		const inputRef = ref<any | HTMLElement>();

		const formRules: formRules = {
			emailRules: [
				{ type: "required", message: "电子邮件地址不能为空" },
				{ type: "email", message: "请输入正确的电子邮箱" },
			],
			passwordRules: [
				{ type: "required", message: "密码不能为空" },
				{ type: "password", message: "请输入正确的密码" },
			],
		};
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

		const onFormSubmit = (result: boolean) => {
			console.log(result);
		};
		return {
			...toRefs(dataList),
			...toRefs(formData),
			formRules,
			onFormSubmit,
			inputRef,
		};
	},
});
</script>

<style></style>
