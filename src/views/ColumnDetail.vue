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
import { computed, defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PostList from "../components/PostList/index.vue";
import { State } from "../store";

export default defineComponent({
	name: "ColumnDetail",
	components: {
		PostList,
	},
	setup() {
		const route = useRoute();
		const store = useStore<State>();
		const currentId = +route.params.id;
		const list = computed(() => store.getters.getPostsByCid(currentId));
		const column = computed(() => store.getters.getColumnById(currentId));
		return { list, column };
	},
});
</script>

<style scoped></style>
