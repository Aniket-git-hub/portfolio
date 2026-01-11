<template>
	<button
		@click="toggleTheme"
		class="fixed top-10 right-2 z-40 p-3 bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:translate-y-1 hover:shadow-none"
		:aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
	>
		<Icon
			:name="theme === 'dark' ? 'mdi:weather-sunny' : 'mdi:weather-night'"
			size="24px"
			class="text-light-text dark:text-dark-text"
		/>
	</button>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>
