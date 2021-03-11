<template>
	<div class="container">
		<global-header :user="user" />
		<router-view />
		<global-footer />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

// 组件
import GlobalHeader from "./components/GlobalHeader/index.vue";
import GlobalFooter from "./components/GlobalFooter/index.vue";
import { useStore } from "vuex";
import { State } from "./store";

export default defineComponent({
	name: "App",
	components: {
		GlobalHeader,
		GlobalFooter,
	},
	setup() {
		const store = useStore<State>();
		const user = computed(() => store.state.user);
		return {
			user,
		};
	},
});
</script>
