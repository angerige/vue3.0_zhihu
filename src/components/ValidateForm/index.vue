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
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "ValidateForm",
	emits: ["form-submit"],
	setup(props, { emit }) {
		const submitForm = () => {
			emit("form-submit", true);
		};
		return {
			submitForm,
		};
	},
});
</script>

<style scoped></style>
