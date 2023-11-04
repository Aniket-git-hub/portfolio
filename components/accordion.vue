<template>
	<div class="">
		<!-- Toggle button -->
		<div
			class="flex items-center cursor-pointer"
			:class="class"
			@click="toggleAccordion"
		>
			<Icon
				class="w-4 h-4 transition-transform transform"
				:class="{ 'rotate-180': isActive }"
				name="mdi:chevron-right"
			/>

			<button class="text-sm pl-2">
				{{ title }}
			</button>
		</div>
		<!-- Content -->
		<div v-show="isActive" class="pl-4">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"

const isActive = ref(false)
const { title, openIcon, closedIcon } = defineProps([
	"title",
	"openIcon",
	"closedIcon",
	"class",
])
const toggleAccordion = () => {
	isActive.value = !isActive.value
}
</script>

<style scoped>
.rotate-180 {
	transform: rotate(90deg);
}
</style>
