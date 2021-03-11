<template>
	<div class="row">
		<div class="col-4 mb-4" v-for="column in columnList" :key="column.id">
			<div class="card h-100 shadow-sm">
				<div class="card-body text-center">
					<img
						:src="column.avatar"
						:alt="column.title"
						class="rounded-circle border border-light w-25 my-3"
					/>
					<h5 class="card-title">{{ column.title }}</h5>
					<p class="card-text text-left">{{ column.description }}</p>
					<router-link
						class="btn btn-outline-primary"
						:to="{ name: 'Column', params: { id: column.id } }"
					>
						进入专栏
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/runtime-core";
import columnImg from "@/assets/column.png";

export interface ColumnProps {
	id: number;
	title: string;
	avatar?: string;
	description: string;
}

export default defineComponent({
	name: "ColumnList",
	props: {
		list: {
			type: Array as PropType<Array<ColumnProps>>,
			required: true,
		},
	},
	setup(props) {
		const columnList = computed((): ColumnProps[] => {
			return props.list.map(
				(column: ColumnProps): ColumnProps => {
					if (!column.avatar) {
						column.avatar = columnImg;
					}
					return column;
				}
			);
		});

		return {
			columnList,
		};
	},
});
</script>

<style scoped></style>
