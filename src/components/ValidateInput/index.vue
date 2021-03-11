<template>
	<div class="validate-input-container pb-3">
		<input
			class="form-control"
			:class="{ 'is-invalid': error }"
			:value="value"
			@blur="validateInput"
			@input="updateValue"
			v-bind="$attrs"
		/>

		<div v-if="error" class="invalid-feedback">
			{{ message }}
		</div>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
	PropType,
	reactive,
	toRefs,
} from "@vue/runtime-core";
import { emitter } from "../ValidateForm/index.vue";

interface RuleProp {
	type: "required" | "email" | "password";
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
	inheritAttrs: false,
	setup(props, { emit, attrs }) {
		const inputRef = reactive({
			value: props.modelValue || "",
			error: false,
			message: "",
		});

		const validateInput = (): boolean => {
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
				return allPassed;
			}
			return true;
		};

		const updateValue = (event: KeyboardEvent) => {
			const targetValue = (event.target as HTMLInputElement).value;
			inputRef.value = targetValue;
			emit("update:modelValue", targetValue);
		};

		onMounted(() => {
			emitter.emit("form-item-created", validateInput);
		});

		return {
			...toRefs(inputRef),
			validateInput,
			updateValue,
		};
	},
});
</script>
