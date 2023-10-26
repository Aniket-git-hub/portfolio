<template>
	<section class="h-full flex text-sm text-white">
		<section class="border-r border-border-color w-60">
			<section class="">
				<div class="border-b border-border-color px-4 py-2">
					<Icon name="mdi:triangle-down" size="8px" /> _technology
				</div>
				<ul>
					<li
						class="px-3 py-2"
						v-for="t in technologies"
						:key="t.name"
					>
						<input type="checkbox" class="mx-3" name="technology" />
						<Icon :name="t.icon" />
						<span class="px-3">{{ t.name }}</span>
					</li>
				</ul>
			</section>
		</section>
		<section class="flex-1 overflow-hidden">
			<ul class="border-b border-border-color">
				<li class="border-r border-border-color w-fit p-2 px-4">
					all;
					<Icon name="mdi:close" size="18px" />
				</li>
			</ul>
			<section class="flex">
				<section class="flex-1 p-4 flex">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</section>
			</section>
		</section>
	</section>
</template>
<script>
export default {
	data() {
		return {
			technologies: [
				{
					name: "React",
					icon: "mdi:react",
				},
				{
					name: "Vue",
					icon: "mdi:vuejs",
				},
				{
					name: "Node.js",
					icon: "mdi:nodejs",
				},
				{
					name: "CSS",
					icon: "mdi:language-css3",
				},
				{
					name: "Javascript",
					icon: "mdi:language-javascript",
				},
				{
					name: "Python",
					icon: "mdi:language-python",
				},
				{
					name: "Git",
					icon: "mdi:git",
				},
				{
					name: "GitHub",
					icon: "mdi:github",
				},
				{
					name: "MongoDB",
					icon: "teenyicons:mongodb-solid",
				},
				{
					name: "SQL",
					icon: "tabler:file-type-sql",
				},
			],
		}
	},
}
</script>
