<template>
	<section class="h-full flex text-sm text-white">
		<section class="border-r border-border-color md:w-60 flex relative">
			<section class="border-r border-border-color py-4">
				<div
					class="p-4 text-border-color hover:cursor-pointer hover:text-white"
					:class="
						activeSidebar === 'ExperiencesSidebar'
							? 'text-white'
							: 'text-border-color'
					"
					@click="changeActiveSidebar('ExperiencesSidebar')"
				>
					<button>
						<Icon name="icon-park-solid:terminal" />
					</button>
				</div>
				<div
					class="p-4 text-border-color hover:cursor-pointer hover:text-white"
					:class="
						activeSidebar === 'PersonalInfoSidebar'
							? 'text-white'
							: 'text-border-color'
					"
					@click="changeActiveSidebar('PersonalInfoSidebar')"
				>
					<button>
						<Icon name="icon-park-solid:personal-collection" />
					</button>
				</div>
				<div
					class="p-4 text-border-color hover:cursor-pointer hover:text-white"
					:class="
						activeSidebar === 'HobbiesInfo'
							? 'text-white'
							: 'text-border-color'
					"
					@click="changeActiveSidebar('HobbiesInfo')"
				>
					<button>
						<Icon name="icon-park-solid:game-ps" />
					</button>
				</div>
			</section>
			<Component :is="activeSidebar" class="hidden md:block" />
			<section
				:class="openSidebar ? 'block' : 'hidden'"
				class="absolute z-50 bg-editor-bg h-full pb-5 border-r border-b border-border-color flex-col"
			>
				<section class="w-full flex justify-center">
					<button
						class="p-2 px-4 bg-card-bg m-3"
						@click="openSidebar = false"
					>
						Back
						<Icon name="mdi:arrow-left" />
					</button>
				</section>
				<Component :is="activeSidebar" />
			</section>
		</section>
		<Component :is="activeContent" />
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
