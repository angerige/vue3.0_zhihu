<template>
	<div class="home-page">
		<h2>{{ biggerColumnLen }}</h2>
		<section class="py-5 text-center container">
			<div class="row py-lg-5">
				<div class="col-lg-6 col-md-8 mx-auto">
					<img src="../assets/1858946.svg" alt="callout" class="w-50" />
					<h2 class="font-weight-light">随心写作</h2>
					<p>
						<a href="#" class="btn btn-primary my-2">开始写文章</a>
					</p>
				</div>
			</div>
		</section>
		<h4 class="font-weight-bold text-center">发现精彩</h4>
		<column-list :list="list" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import ColumnList from "../components/ColumnList/index.vue";
import { useStore } from "vuex";
import { State } from "../store";

export default defineComponent({
	name: "Home",
	components: {
		ColumnList,
	},
	setup() {
		const store = useStore<State>();
		const list = computed(() => store.state.columns);
		const biggerColumnLen = computed(() => store.getters.biggerColumnLen);

		return {
			list,
			biggerColumnLen,
		};
	},
});
</script>

<style scoped></style>
