<template>
	<column-list :list="list" />
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import ColumnList, { ColumnProps } from "../components/ColumnList/index.vue";
import { useStore } from "vuex";
import { State } from "../store";

interface DataList {
	list: Array<ColumnProps>;
}
export default defineComponent({
	name: "Home",
	components: {
		ColumnList,
	},
	setup() {
		const store = useStore<State>();
		const list = computed(() => store.state.columns);

		return {
			list,
		};
	},
});
</script>

<style scoped></style>
