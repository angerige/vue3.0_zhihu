<template>
	<div class="container">
		<global-header :user="user" />
		<form>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Email address</label>
				<input
					type="email"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					v-model="value"
					@blur="validateEmail"
				/>
				<div class="form-text" v-if="error">
					{{ message }}
				</div>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Password</label>
				<input
					type="password"
					class="form-control"
					id="exampleInputPassword1"
				/>
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

interface DataList {
	list: Array<ColumnProps>;
	user: UserProps;
}

// email正则表达式
const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

export default defineComponent({
	name: "App",
	components: {
		ColumnList,
		GlobalHeader,
	},
	setup() {
		const emailRef = reactive({
			value: "",
			error: false,
			message: "",
		});

		const validateEmail = () => {
			if (emailRef.value.trim() === "") {
				emailRef.error = true;
				emailRef.message = "can not be empty";
			} else if (!emailReg.test(emailRef.value)) {
				emailRef.error = true;
				emailRef.message = "should be valid message";
			}
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

		return {
			...toRefs(dataList),
			...toRefs(emailRef),
			validateEmail,
		};
	},
});
</script>

<style></style>
