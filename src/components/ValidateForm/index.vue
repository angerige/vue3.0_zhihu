<template>
	<form class="validate-form-container">
		<slot name="default" />
		<div class="submit-area" @click.prevent="submitForm">
			<slot name="submit">
				<button type="submit" class="btn btn-primary">提交</button>
			</slot>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "@vue/runtime-core";
import mitt from "mitt";

export const emitter = mitt();

export default defineComponent({
	name: "ValidateForm",
	emits: ["form-submit"],
	setup(props, { emit }) {
		const submitForm = () => {
			emit("form-submit", true);
		};

		const callback = (test: any) => {
			console.log(test);
		};

		emitter.on("form-item-created", callback);
		onUnmounted(() => {
			emitter.off("form-item-created", callback);
		});
		return {
			submitForm,
		};
	},
});
</script>

<style scoped></style>
