<template>
	<validate-form @form-submit="onFormSubmit">
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
	</validate-form>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "@vue/runtime-core";
import { reactive, ref } from "vue";
import ValidateInput, {
	RulesProp,
} from "../components/ValidateInput/index.vue";
import ValidateForm from "../components/ValidateForm/index.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { State } from "../store";

interface formRules {
	emailRules: RulesProp;
	passwordRules: RulesProp;
}

export default defineComponent({
	name: "Login",
	components: { ValidateInput, ValidateForm },
	setup() {
		const router = useRouter();
		const store = useStore<State>();

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

		const onFormSubmit = (result: boolean) => {
			if (result) {
				// 后续axios 请求
				store.commit("login");
				router.push({ name: "Home" });
			}
			console.log(result);
		};
		return {
			formRules,
			inputRef,
			onFormSubmit,
			...toRefs(formData),
		};
	},
});
</script>
