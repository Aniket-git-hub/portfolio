<template>
	<section
		class="h-full flex text-sm text-editor-text-color hide-scrollbar relative"
	>
		<section
			class="h-full border-r border-border-color w-60 hidden md:block"
		>
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
		<section
			class="h-full border-r border-border-color bg-editor-bg absolute z-30"
			:class="openSidebar === true ? 'block' : 'hidden'"
		>
			<section class="w-full flex justify-center">
				<button
					class="p-2 px-4 bg-card-bg m-3 text-white"
					@click="openSidebar = false"
				>
					Back
					<Icon name="mdi:arrow-left" />
				</button>
			</section>
			<ul class="w-60 border-t border-border-color">
				<li class="px-3 py-2" v-for="t in technologies" :key="t.name">
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
			</ul>
		</section>
		<section class="flex-1">
			<ul class="border-b border-border-color flex">
				<li
					class="border-r border-border-color hover:text-white w-fit p-2 px-4 md:hidden"
				>
					<button @click="openSidebar = true">
						<Icon name="mdi:filter" size="18px" />
					</button>
				</li>
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
			<div class="md:pl-10 pt-4 flex flex-wrap">
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
const images = import.meta.globEager("../assets/*.png")
export default {
	data() {
		return {
			openSidebar: false,
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
					icon: "cib:java",
					selected: false,
				},
				{
					name: "Vercel",
					icon: "akar-icons:vercel-fill",
					selected: false,
				},
				{
					name: "Render",
					icon: "simple-icons:render",
					selected: false,
				},
				{
					name: "Firebase",
					icon: "teenyicons:firebase-solid",
					selected: false,
				},
			],
			projects: [
				{
					name: "Portfolio Site",
					description:
						"This is my portfolio website that you are currently browsing",
					img: images["../assets/portfolio.png"].default,
					technologies: [
						"Vue",
						"Nuxt",
						"SSR",
						"Vercel",
						"Javascript",
					],
					sourceCode: "https://github.com/Aniket-git-hub/portfolio",
					projectLink: "https://aniket.letsbug.in",
				},
				{
					name: "32 Beads Game",
					description: "This is a online multiplayer board game.",
					img: images["../assets/dashboard_1.png"].default,
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
					projectLink: "https://32beads.letsbug.in/",
				},
				{
					name: "Employee Attendance App.",
					img: images["../assets/payroll-1.png"].default,
					description:
						"This is android projects that helps small businesses with their attendance record and payments",
					technologies: ["Java", "Android", "Sqlite"],
					sourceCode:
						"https://github.com/aniket-git-hub/social-network",
					projectLink:
						"https://github.com/aniket-git-hub/social-network",
				},
				{
					name: "Social Network",
					description: "Description for Project 2",
					img: images["../assets/dashboard.png"].default,
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
