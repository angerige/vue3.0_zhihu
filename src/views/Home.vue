<template>
	<column-list :list="list" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ColumnList, { ColumnProps } from "../components/ColumnList/index.vue";
// 图片
import logoImg from "@/assets/logo.png";
import { reactive, toRefs } from "vue";

interface DataList {
	list: Array<ColumnProps>;
}
export default defineComponent({
	name: "Home",
	components: {
		ColumnList,
	},
	setup() {
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
		});

		return {
			...toRefs(dataList),
		};
	},
});
</script>

<style scoped></style>
