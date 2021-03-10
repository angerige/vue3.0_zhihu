import { Ref } from "@vue/reactivity";
import { onMounted, onUnmounted, ref } from "vue";

const useClickOuyside = (elementRef: Ref<null | HTMLElement>) => {
	const isClickOutside = ref<boolean>(false);

	const handler = (event: MouseEvent) => {
		if (elementRef.value) {
			if (elementRef.value.contains(event.target as HTMLElement)) {
				isClickOutside.value = false;
			} else {
				isClickOutside.value = true;
			}
		}
	};

	onMounted(() => {
		document.addEventListener("click", handler);
	});

	onUnmounted(() => {
		document.removeEventListener("click", handler);
	});

	return isClickOutside;
};

export default useClickOuyside;
