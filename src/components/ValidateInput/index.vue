<template>
	<div class="validate-input-container pb-3">
		<input
			type="text"
			class="form-control"
			:class="{ 'is-invalid': error }"
			:value="value"
			@blur="validateEmail"
			@input="updateValue"
		/>

		<div v-if="error" class="invalid-feedback">
			{{ message }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "@vue/runtime-core";

interface RuleProp {
	type: "required" | "email";
	message: string;
}

export type RulesProp = RuleProp[];

// email正则表达式
const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

export default defineComponent({
	name: "ValidateInput",
	props: {
		rules: Array as PropType<RulesProp>,
		modelValue: String,
	},
	setup(props, { emit }) {
		const inputRef = reactive({
			value: props.modelValue || "",
			error: false,
			message: "",
		});

		const validateEmail = (): void => {
			if (props.rules) {
				const allPassed: boolean = props.rules.every(rule => {
					let passed = true;
					inputRef.message = rule.message;
					switch (rule.type) {
						case "required":
							passed = inputRef.value.trim() !== "";
							break;
						case "email":
							passed = emailReg.test(inputRef.value);
							break;

						default:
							break;
					}

					return passed;
				});

				inputRef.error = !allPassed;
			}
		};

		const updateValue = (event: KeyboardEvent) => {
			const targetValue = (event.target as HTMLInputElement).value;
			inputRef.value = targetValue;
			emit("update:modelValue", targetValue);
		};

		return {
			...toRefs(inputRef),
			validateEmail,
			updateValue,
		};
	},
});
</script>
