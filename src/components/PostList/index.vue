<template>
	<div class="post-list">
		<article v-for="post in list" :key="post.id" class="card mb-3 shadow-sm">
			<div class="card-body">
				<h4>{{ post.title }}</h4>
				<div class="row my-3 align-items-center">
					<div v-if="post.image" class="col-3">
						<img :src="post.image" :alt="post.title" class="rounded-lg w-2" />
					</div>
					<p :class="{ 'col-9': post.image }">{{ post.content }}</p>
				</div>
				<span class="text-muted">{{ post.createdAt }}</span>
			</div>
		</article>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { PostProps } from "../../typings/index";

export default defineComponent({
	name: "PostList",
	props: {
		list: {
			type: Array as PropType<PostProps[]>,
			required: true,
		},
	},
});
</script>
