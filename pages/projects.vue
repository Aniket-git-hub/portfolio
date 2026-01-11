<template>
	<section
		class="h-full flex text-sm text-light-text dark:text-dark-text hide-scrollbar relative"
	>
		<section
			class="h-full border-r-4 border-light-border dark:border-dark-border w-60 hidden md:block bg-light-surface dark:bg-dark-surface transition-colors duration-300"
		>
			<!-- <div class="border-b border-border-color px-4 py-2">
				<Icon name="mdi:triangle-down" size="8px" /> _technology
			</div> -->
			<ul class="w-60">
				<Accordion
					title="_technology"
					class="border-b-4 border-light-border dark:border-dark-border px-4 py-2 font-black"
				>
					<li
						class="px-3 py-2"
						v-for="t in technologies"
						:key="t.name"
					>
						<label
							:for="t.name"
							class="hover:cursor-pointer transition-all duration-200 font-semibold"
							:class="t.selected ? 'text-light-accent dark:text-dark-accent' : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text'"
						>
							<input
								:id="t.name"
								type="checkbox"
								class="mx-3 w-4 h-4 accent-light-accent dark:accent-dark-accent"
								name="technology"
								v-model="t.selected"
							/>
							<Icon :name="t.icon" size="20px" />
							<span class="px-2">
								{{ t.name }}
							</span>
						</label>
					</li>
				</Accordion>
			</ul>
		</section>
		<section
			class="h-full border-r-4 border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card absolute z-30 shadow-brutal-lg transition-colors duration-300"
			:class="openSidebar === true ? 'block' : 'hidden'"
		>
			<section class="w-full flex justify-center">
				<button
					class="p-2 px-4 bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg m-3 border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold"
					@click="openSidebar = false"
				>
					Back
					<Icon name="mdi:arrow-left" />
				</button>
			</section>
			<ul class="w-60 border-t-4 border-light-border dark:border-dark-border">
				<h3 class="py-2 px-6 text-md font-black text-light-text dark:text-dark-text">_technology</h3>
				<li class="px-3 py-2" v-for="t in technologies" :key="t.name">
					<label
						:for="t.name"
						class="hover:cursor-pointer transition-all duration-200 font-semibold"
						:class="t.selected ? 'text-light-accent dark:text-dark-accent' : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text'"
					>
						<input
							:id="t.name"
							type="checkbox"
							class="mx-3 w-4 h-4 accent-light-accent dark:accent-dark-accent"
							name="technology"
							v-model="t.selected"
						/>
						<Icon :name="t.icon" size="20px" />
						<span class="px-2">
							{{ t.name }}
						</span>
					</label>
				</li>
			</ul>
		</section>
		<section class="flex-1">
			<ul class="border-b-4 border-light-border dark:border-dark-border flex bg-light-surface dark:bg-dark-surface transition-colors duration-300">
				<li
					class="border-r-4 border-light-border dark:border-dark-border w-fit p-2 px-4 md:hidden transition-all duration-200 hover:bg-light-hover dark:hover:bg-dark-hover hover:shadow-brutal-sm"
				>
					<button @click="openSidebar = true" class="transition-transform duration-200 hover:scale-110">
						<Icon name="mdi:filter" size="18px" />
					</button>
				</li>
				<li
					class="border-r-4 border-light-border dark:border-dark-border w-fit p-2 px-4 flex items-center gap-2 transition-all duration-200 hover:bg-light-hover dark:hover:bg-dark-hover hover:shadow-brutal-sm font-semibold"
					v-for="t in selectedTechnologies"
					:key="t.name"
				>
					<span class="text-light-text dark:text-dark-text">{{ t.name }}</span>
					<button 
						v-if="!t.noClose" 
						@click="removeTechnology(t)"
						class="transition-transform duration-200 hover:scale-125 hover:text-light-accent dark:hover:text-dark-accent"
					>
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
	head() {
		return {
			title: "Aniket Singh Projects - Portfolio | PodcastInc AI, BookifyCall, InformedALF",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"View Aniket Singh's portfolio projects including PodcastInc AI, BookifyCall, InformedALF, and more. Full-stack applications built with Laravel, PHP, Next.js, Node.js, Python, and Docker.",
				},
				{
					name: "keywords",
					content: "Aniket Singh Projects, Aniket Singh Portfolio, PodcastInc AI, BookifyCall, InformedALF, Software Engineer Projects, Full-Stack Projects, Laravel Projects, Next.js Projects, Web Development Portfolio"
				},
				{
					property: "og:title",
					content: "Aniket Singh Projects - Portfolio | Software Engineer Work"
				},
				{
					property: "og:description",
					content: "View Aniket Singh's portfolio projects including PodcastInc AI, BookifyCall, InformedALF, and more full-stack applications."
				},
				{
					property: "og:url",
					content: "https://aniket.letsbug.in/projects"
				},
				{
					rel: "canonical",
					href: "https://aniket.letsbug.in/projects"
				}
			],
		}
	},
	data() {
		return {
			openSidebar: false,
			technologies: [
				{
					name: "Laravel",
					icon: "devicon:laravel",
					selected: false,
				},
				{
					name: "PHP",
					icon: "devicon:php",
					selected: false,
				},
				{
					name: "Next.js",
					icon: "skill-icons:nextjs-light",
					selected: false,
				},
				{
					name: "Node.js",
					icon: "mdi:nodejs",
					selected: false,
				},
				{
					name: "Python",
					icon: "logos:python",
					selected: false,
				},
				{
					name: "Docker",
					icon: "devicon:docker",
					selected: false,
				},
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
					name: "LLMs",
					icon: "simple-icons:openai",
					selected: false,
				},
				{
					name: "Redis",
					icon: "devicon:redis",
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
					name: "PodcastInc AI",
					description:
						"AI-powered podcast platform with full-stack implementation. Features include content generation, audio processing, and intelligent recommendations.",
					img: images["../assets/dashboard.png"].default,
					technologies: [
						"Laravel",
						"PHP",
						"Next.js",
						"Node.js",
						"LLMs",
						"Docker",
						"Python",
						"Redis",
					],
					sourceCode: "#",
					projectLink: "https://podcastinc.ai",
				},
				{
					name: "BookifyCall",
					description:
						"Full-stack booking and scheduling platform with real-time availability management, calendar integration, and automated notifications.",
					img: images["../assets/dashboard_1.png"].default,
					technologies: [
						"Laravel",
						"PHP",
						"Next.js",
						"Node.js",
						"Docker",
						"Redis",
						"SQL",
					],
					sourceCode: "#",
					projectLink: "https://bookifycall.com",
				},
				{
					name: "InformedALF",
					description:
						"Information management platform with AI capabilities. Built with modern frontend and backend technologies for efficient data processing.",
					img: images["../assets/portfolio.png"].default,
					technologies: [
						"Next.js",
						"Node.js",
						"Python",
						"Docker",
						"Redis",
						"SQL",
					],
					sourceCode: "#",
					projectLink: "https://informedalf.com",
				},
				{
					name: "Portfolio Site",
					description:
						"Modern portfolio website built with Nuxt 3, featuring SSR, optimized performance, and a developer-friendly editor theme.",
					img: images["../assets/portfolio.png"].default,
					technologies: [
						"Vue",
						"Nuxt",
						"SSR",
						"Vercel",
						"Javascript",
						"Tailwind",
					],
					sourceCode: "https://github.com/Aniket-git-hub/portfolio",
					projectLink: "https://aniket.letsbug.in",
				},
				{
					name: "32 Beads Game",
					description: "Online multiplayer board game with real-time synchronization and interactive gameplay.",
					img: images["../assets/dashboard_1.png"].default,
					technologies: [
						"React",
						"Nodejs",
						"MongoDB",
						"Expressjs",
						"Vercel",
						"Render",
						"Javascript",
					],
					sourceCode: "https://github.com/Aniket-git-hub/32si",
					projectLink: "https://32beads.letsbug.in/",
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
</style>
