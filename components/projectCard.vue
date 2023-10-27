<template>
	<article class="m-8 w-fit">
		<span class="text-blue-600 font-bold">
			{{ name }}
			<span class="text-editor-text-color"> // ui-animation </span></span
		>
		<article
			class="bg-bg-color mt-2 rounded-xl border border-border-color overflow-hidden relative"
		>
			<button
				class="absolute left-4 top-4 p-2 rounded-3xl shadow-xl bg-gray-100 text-white"
			>
				<Icon name="devicon:vuejs" />
			</button>
			<img
				class="w-80 h-40"
				src="https://source.unsplash.com/random/?profile"
			/>
			<section class="w-80 p-4">
				<p>
					{{ description }}
				</p>
				<button class="bg-card-btn mt-4 px-4 py-2 rounded-lg">
					view-project
				</button>
			</section>
		</article>
	</article>
</template>
<script>
export default {
	props: ["name", "description"],
}
</script>
