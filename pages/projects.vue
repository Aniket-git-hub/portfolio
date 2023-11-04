<template>
	<section class="h-full flex text-sm text-editor-text-color hide-scrollbar">
		<section class="h-full border-r border-border-color w-60">
			<!-- <div class="border-b border-border-color px-4 py-2">
				<Icon name="mdi:triangle-down" size="8px" /> _technology
			</div> -->
			<ul class="w-60">
				<Accordion
					title="_technology"
					class="border-b border-border-color px-4 py-2"
				>
					<li
						class="px-3 py-2"
						v-for="t in technologies"
						:key="t.name"
					>
						<label
							:for="t.name"
							class="hover:cursor-pointer hover:text-white"
							:class="t.selected && 'text-white'"
						>
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
				</Accordion>
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
					:img="project.img"
					:sourceCode="project.sourceCode"
					:projectLink="project.projectLink"
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
					name: "Nodejs",
					icon: "mdi:nodejs",
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
				{
					name: "Java",
					icon: "tabler:file-type-sql",
					selected: false,
				},
				{
					name: "Vercel",
					icon: "tabler:file-type-sql",
					selected: false,
				},
				{
					name: "Render",
					icon: "tabler:file-type-sql",
					selected: false,
				},
				{
					name: "Firebase",
					icon: "tabler:file-type-sql",
					selected: false,
				},
			],
			projects: [
				{
					name: "Portfolio Site",
					description:
						"This is my portfolio website that you are currently browsing",
					img: "../assets/portfolio.png",
					technologies: [
						"Vue",
						"Nuxt",
						"SSR",
						"Vercel",
						"Javascript",
					],
					sourceCode: "https://github.com/Aniket-git-hub/portfolio",
					projectLink: "aniket.letsbug.in",
				},
				{
					name: "32 Beads Game",
					description: "This is a online multiplayer board game.",
					technologies: [
						"React",
						"ChakraUI",
						"Mongodb",
						"Nodejs",
						"Expressjs",
						"Vercel",
						"Render",
						"Git",
						"Github",
						"Javascript",
					],
					sourceCode: "https://github.com/Aniket-git-hub/32si",
					projectLink: "32beads.letsbug.in/",
				},
				{
					name: "Employee Attendance App.",
					description:
						"This is android projects that helps small businesses with their attendance record and payments",
					technologies: ["Java", "Android", "Sqlite"],
					sourceCode:
						"https://github.com/aniket-git-hub/social-network",
					projectLink: "social-network.firebase.app",
				},
				{
					name: "Social Network",
					description: "Description for Project 2",
					sourceCode:
						"https://github.com/Aniket-git-hub/payrollSystem",
					projectLink: "social-network.firebase.app",
					technologies: [
						"Vue",
						"Nodejs",
						"mongodb",
						"Git",
						"Expressjs",
						"Heroku",
						"Firebase",
						"Tailwind",
						"CSS",
						"HTML",
						"Javascript",
					],
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
