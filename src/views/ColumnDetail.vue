<template>
	<h1 class="">
		<pre>
			{{ route }}
		</pre
		>
	</h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default defineComponent({
	name: "ColumnDetail",
	setup() {
		const route = useRoute();

		return {
			route,
		};
	},
});
</script>

<style scoped></style>
