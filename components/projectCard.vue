<template>
	<article class="m-6 md:m-8 w-fit group">
		<span class="text-light-accent-3 dark:text-dark-accent-3 font-black text-lg">
			Project {{ index }}
			<span class="text-light-text-secondary dark:text-dark-text-secondary"> // {{ name }} </span></span
		>
		<article
			class="bg-light-card dark:bg-dark-card mt-2 border-4 border-light-border dark:border-dark-border overflow-hidden relative shadow-brutal-lg transition-all duration-200 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-none"
		>
			<a
				:href="sourceCode"
				class="absolute left-4 top-4 p-3 bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg border-4 border-light-border dark:border-dark-border shadow-brutal z-10 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
				target="_blank"
				v-if="sourceCode && sourceCode !== '#'"
			>
				<Icon name="devicon:github" size="20px" />
			</a>
			<div class="relative overflow-hidden border-b-4 border-light-border dark:border-dark-border">
				<img 
					class="w-80 h-40 object-cover" 
					:src="img"
					:alt="name"
				/>
			</div>
			<section class="w-80 p-4">
				<p class="text-light-text dark:text-dark-text text-sm leading-relaxed mb-4">
					{{ description }}
				</p>
				<a
					:href="projectLink"
					class="bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg px-4 py-2 border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold inline-block"
					target="_blank"
					rel="nofollow"
				>
					view-project →
				</a>
			</section>
		</article>
	</article>
</template>
<script>
export default {
	props: ["name", "description", "index", "projectLink", "sourceCode", "img"],
}
</script>
