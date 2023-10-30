<template>
	<section class="h-full flex text-sm text-white hide-scrollbar">
		<section class="h-full border-r border-border-color w-60">
			<div class="border-b border-border-color px-4 py-2">
				<Icon name="mdi:triangle-down" size="8px" /> _technology
			</div>
			<ul class="w-60">
				<li class="px-3 py-2" v-for="t in technologies" :key="t.name">
					<label :for="t.name" class="hover:cursor-pointer">
						<input
							:id="t.name"
							type="checkbox"
							class="mx-3"
							name="technology"
							v-model="t.selected"
						/>
						<Icon :name="t.icon" />
						<span class="px-2">
							{{ t.name }}
						</span>
					</label>
				</li>
			</ul>
		</section>
		<section class="flex-1">
			<ul class="border-b border-border-color flex">
				<li
					class="border-r border-border-color w-fit p-2 px-4"
					v-for="t in selectedTechnologies"
					:key="t.name"
				>
					{{ t.name }};
					<button v-if="!t.noClose" @click="removeTechnology(t)">
						<Icon name="mdi:close" size="18px" />
					</button>
				</li>
			</ul>
			<div class="pl-10 pt-4 flex flex-wrap">
				<ProjectCard
					v-for="(project, i) in filteredProjects"
					:key="project.name"
					:index="i + 1"
					:name="project.name"
					:description="project.description"
				/>
			</div>
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
					selected: false,
				},
				{
					name: "Vue",
					icon: "mdi:vuejs",
					selected: false,
				},
				{
					name: "Node.js",
					icon: "mdi:nodejs",
					selected: false,
				},
				{
					name: "CSS",
					icon: "mdi:language-css3",
					selected: false,
				},
				{
					name: "Javascript",
					icon: "mdi:language-javascript",
					selected: false,
				},
				{
					name: "Python",
					icon: "mdi:language-python",
					selected: false,
				},
				{
					name: "Git",
					icon: "mdi:git",
					selected: false,
				},
				{
					name: "GitHub",
					icon: "mdi:github",
					selected: false,
				},
				{
					name: "MongoDB",
					icon: "teenyicons:mongodb-solid",
					selected: false,
				},
				{
					name: "SQL",
					icon: "tabler:file-type-sql",
					selected: false,
				},
			],
			projects: [
				{
					name: "Portfolio Site",
					description:
						"This is my portfolio website that you are currently browsing",
					technologies: ["Vue", "node.js", "nuxt", "ssr", "vercel"],
				},
				{
					name: "32 Beads Game",
					description: "This is a online multiplayer board game.",
					technologies: [
						"react",
						"chakraUI",
						"mongodb",
						"node.js",
						"express.js",
						"vercel",
						"render",
						"git",
						"github",
					],
				},
				{
					name: "Employee Attendance App.",
					description:
						"This is android projects that helps small businesses with their attendance record and payments",
					technologies: ["Java", "android", "sqlite"],
				},
				{
					name: "Project 4",
					description: "Description for Project 2",
					technologies: ["Vue", "Node.js", "mongodb"],
				},
			],
		}
	},
	computed: {
		selectedTechnologies() {
			const selectedTechnologies = this.technologies.filter(
				(t) => t.selected,
			)
			return selectedTechnologies.length > 0
				? selectedTechnologies
				: [{ name: "all", noClose: true }]
		},
		filteredProjects() {
			if (this.selectedTechnologies[0].name === "all") {
				return this.projects
			} else {
				return this.projects.filter((project) =>
					project.technologies.some((tech) =>
						this.selectedTechnologies
							.map((t) => t.name)
							.includes(tech),
					),
				)
			}
		},
	},
	methods: {
		removeTechnology(technology) {
			technology.selected = false
		},
	},
}
</script>
<style>
.h-90 {
	max-height: 60%;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
