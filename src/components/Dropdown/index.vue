<template>
	<div class="dropdown" ref="dropdownRef">
		<a
			href="#"
			class="btn btn-outline-light my-2 dropdown-toggle"
			@click.prevent="handleOpen"
		>
			{{ title }}
		</a>
		<ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
			<slot />
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/runtime-core";

import useClickOuyside from "../../hooks/useClickOutside";

export default defineComponent({
	name: "Dropdown",
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	setup() {
		const isOpen = ref<boolean>(false);
		const dropdownRef = ref<null | HTMLElement>(null);
		const isClickOutside = useClickOuyside(dropdownRef);

		const handleOpen = () => {
			isOpen.value = !isOpen.value;
		};

		watch(isClickOutside, () => {
			if (isClickOutside.value && isOpen.value) {
				isOpen.value = false;
			}
		});

		return {
			isOpen,
			handleOpen,
			dropdownRef,
		};
	},
});
</script>

<style scoped></style>
