<template>
	<article
		class="bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal-lg p-4 md:p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
	>
		<div class="text-3xl md:text-4xl font-black text-light-accent dark:text-dark-accent mb-2">
			{{ value }}
		</div>
		<div class="text-xs md:text-sm font-bold text-light-text dark:text-dark-text">
			{{ label }}
		</div>
	</article>
</template>

<script setup lang="ts">
defineProps<{
	value: string | number
	label: string
}>()
</script>
