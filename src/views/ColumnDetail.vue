<template>
	<div class="column-detail-page w-75 mx-auto">
		<div class="column-info row mb-4 border-bottom pb-4 align-items-center">
			<div class="col-3 text-center">
				<img :src="column.avatar" :alt="column.title" class="rounded-circle" />
			</div>

			<div class="col-9">
				<h4>{{ column.title }}</h4>
				<p class="text-muted">{{ column.description }}</p>
			</div>
		</div>
		<post-list :list="list" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import PostList from "../components/PostList/index.vue";

export default defineComponent({
	name: "ColumnDetail",
	components: {
		PostList,
	},
	setup() {
		const route = useRoute();
		const currentId = +route.params.id;
		// TODO 使用vuex状态管理 和 axios请求 不在做测试数据
		// const column = testData.find(c => c.id === currentId);
		// const list = testProps.filter(post => post.columnId === currentId);

		return {};
	},
});
</script>

<style scoped></style>
