<template>
	<article class="m-6 md:m-8 w-fit">
		<span class="text-blue-600 font-bold">
			Project {{ index }}
			<span class="text-editor-text-color"> // {{ name }} </span></span
		>
		<article
			class="bg-bg-color mt-2 rounded-xl border border-border-color overflow-hidden relative"
		>
			<a
				:href="sourceCode"
				class="absolute left-4 top-4 p-1 rounded-3xl shadow-xl bg-gray-100 text-white"
				target="_blank"
			>
				<Icon name="devicon:github" />
			</a>
			<img class="w-80 h-40 object-cover" :src="img" />
			<section class="w-80 p-4">
				<p class="text-white">
					{{ description }}
					lorem23
				</p>
				<button class="mt-2 bg-card-btn px-4 py-2 rounded-lg">
					<a :href="projectLink" class="text-white" target="_blank">
						view-project
					</a>
				</button>
			</section>
		</article>
	</article>
</template>
<script>
export default {
	props: ["name", "description", "index", "projectLink", "sourceCode", "img"],
}
</script>
