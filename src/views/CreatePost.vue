<template>
	<div class="create-post-page">
		<h4>新建文章</h4>
		<validate-form @form-submit="onFormSubmit">
			<div class="mb-3">
				<label class="form-label">文章标题:</label>
				<validate-input
					:rules="formRules.titleRules"
					v-model="titleValue"
					placeholder="请输入文章标题"
					type="text"
					ref="inputRef"
				/>
			</div>

			<div class="mb-3">
				<label class="form-label">文章详情:</label>
				<validate-input
					rows="10"
					:rules="formRules.contentRules"
					v-model="contentValue"
					placeholder="请输入文章详情"
					type="text"
					tag="textarea"
				/>
			</div>
		</validate-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "@vue/runtime-core";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ValidateForm from "../components/ValidateForm/index.vue";
import ValidateInput from "../components/ValidateInput/index.vue";
import { State } from "../store";
import { PostProps } from "../typings";

interface FormRules {
	titleRules: {
		type: string;
		message: string;
	}[];
	contentRules: {
		type: string;
		message: string;
	}[];
}

interface FormData {
	titleValue: string;
	contentValue: string;
}

export default defineComponent({
	name: "CreatePost",
	components: {
		ValidateForm,
		ValidateInput,
	},
	setup() {
		const store = useStore<State>();
		const router = useRouter();
		const formData = reactive<FormData>({
			titleValue: "",
			contentValue: "",
		});

		const inputRef = ref<any | HTMLElement>();

		const formRules: FormRules = {
			titleRules: [{ type: "required", message: "文章标题不能为空" }],
			contentRules: [{ type: "required", message: "文章详情不能为空" }],
		};

		const onFormSubmit = (result: boolean) => {
			if (result) {
				// 后续axios 请求
				const { columnId } = store.state.user;
				if (columnId) {
					const newPost: PostProps = {
						id: new Date().getTime(),
						title: formData.titleValue,
						content: formData.contentValue,
						columnId,
						createdAt: new Date().toLocaleString(),
					};

					store.commit("createPost", newPost);
					router.push({ name: "Column", params: { id: columnId } });
				}
			}
		};

		return {
			...toRefs(formData),
			inputRef,
			formRules,
			onFormSubmit,
		};
	},
});
</script>
