<template>
	<section class="h-full flex text-sm text-light-text dark:text-dark-text overflow-hidden">
		<section class="border-r-4 border-light-border dark:border-dark-border md:w-60 flex flex-col relative bg-light-surface dark:bg-dark-surface transition-colors duration-300 min-w-0">
			<section class="border-r-4 border-light-border dark:border-dark-border py-4 flex-shrink-0">
				<div
					class="p-4 hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
					:class="
						activeSidebar === 'ExperiencesSidebar'
							? 'text-light-text dark:text-dark-text bg-light-accent dark:bg-dark-accent'
							: 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover'
					"
					@click="changeActiveSidebar('ExperiencesSidebar')"
				>
					<button class="transition-transform duration-200 hover:scale-110">
						<Icon name="icon-park-solid:terminal" size="24px" />
					</button>
				</div>
				<div
					class="p-4 hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
					:class="
						activeSidebar === 'PersonalInfoSidebar'
							? 'text-light-text dark:text-dark-text bg-light-accent dark:bg-dark-accent'
							: 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover'
					"
					@click="changeActiveSidebar('PersonalInfoSidebar')"
				>
					<button class="transition-transform duration-200 hover:scale-110">
						<Icon name="icon-park-solid:personal-collection" size="24px" />
					</button>
				</div>
				<div
					class="p-4 hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
					:class="
						activeSidebar === 'HobbiesInfo'
							? 'text-light-text dark:text-dark-text bg-light-accent dark:bg-dark-accent'
							: 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover'
					"
					@click="changeActiveSidebar('HobbiesInfo')"
				>
					<button class="transition-transform duration-200 hover:scale-110">
						<Icon name="icon-park-solid:game-ps" size="24px" />
					</button>
				</div>
			</section>
			<Component :is="activeSidebar" class="hidden md:block flex-1 overflow-y-auto hide-scrollbar min-w-0" />
			<section
				:class="openSidebar ? 'block' : 'hidden'"
				class="absolute z-50 bg-light-card dark:bg-dark-card h-full pb-5 border-r-4 border-b-4 border-light-border dark:border-dark-border flex-col shadow-brutal-lg transition-colors duration-300"
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
				<Component :is="activeSidebar" />
			</section>
		</section>
		<Component :is="activeContent" class="flex-1 overflow-hidden min-w-0" />
	</section>
</template>

<script>
import Bio from "../components/bio.vue"
import ByDefault from "../components/byDefault.vue"
import Education from "../components/education.vue"
import Experiences from "../components/experiences.vue"
import HardSkills from "../components/hardSkills.vue"
import HobbiesInfo from "../components/hobbiesInfo.vue"
import Interests from "../components/interests.vue"
import PersonalInfoSidebar from "../components/personalInfoSidebar.vue"
import ExperiencesSidebar from "../components/professionalSidebar.vue"
import SoftSkills from "../components/softSkills.vue"
import Sports from "../components/sports.vue"

export default {
	components: {
		ExperiencesSidebar,
		PersonalInfoSidebar,
		HobbiesInfo,
		Experiences,
		Education,
		Bio,
		HardSkills,
		SoftSkills,
		Interests,
		Sports,
		ByDefault,
	},
	head() {
		return {
			title: "About Aniket Singh - Software Engineer | Education, Experience, Skills",
			meta: [
				{
					hid: "description",
					name: "description",
					content:
						"Learn about Aniket Singh - Software Engineer at DSHGSonic. View education, work experience, technical skills (Laravel, PHP, Next.js, Node.js, Python, Docker, LLMs), and professional background.",
				},
				{
					name: "keywords",
					content: "Aniket Singh, About Aniket Singh, Software Engineer Resume, Aniket Singh Education, Aniket Singh Experience, Aniket Singh Skills, DSHGSonic, Full-Stack Developer Profile"
				},
				{
					property: "og:title",
					content: "About Aniket Singh - Software Engineer | Education, Experience, Skills"
				},
				{
					property: "og:description",
					content: "Learn about Aniket Singh - Software Engineer at DSHGSonic. View education, work experience, technical skills, and professional background."
				},
				{
					property: "og:url",
					content: "https://aniket.letsbug.in/about"
				},
				{
					rel: "canonical",
					href: "https://aniket.letsbug.in/about"
				}
			],
		}
	},
	data() {
		return {
			activeSidebar: "ExperiencesSidebar",
			activeContent: "PersonalInfo",
			openSidebar: false,
		}
	},
	methods: {
		changeContent(content) {
			this.activeContent = content
			this.openSidebar = false
		},
		changeActiveSidebar(activeSidebar) {
			this.activeSidebar = activeSidebar
			if (window.innerWidth < 768) {
				this.openSidebar = true
			}
		},
	},
}
</script>
