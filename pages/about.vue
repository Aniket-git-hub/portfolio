<template>
	<section class="h-full flex text-sm text-white">
		<section class="border-r border-border-color w-60 flex">
			<section class="border-r border-border-color py-4">
				<div
					class="p-4 text-border-color hover:cursor-pointer hover:text-white"
					:class="
						activeSidebar === 'ExperiencesSidebar'
							? 'text-white'
							: 'text-border-color'
					"
					@click="activeSidebar = 'ExperiencesSidebar'"
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
					@click="activeSidebar = 'PersonalInfoSidebar'"
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
					@click="activeSidebar = 'HobbiesInfo'"
				>
					<button>
						<Icon name="icon-park-solid:game-ps" />
					</button>
				</div>
			</section>
			<Component :is="activeSidebar" />
		</section>
		<Component :is="activeContent" />
	</section>
</template>

<script>
import Bio from "../components/bio.vue"
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
	},
	data() {
		return {
			activeSidebar: "ExperiencesSidebar",
			activeContent: "PersonalInfo",
		}
	},
	methods: {
		changeContent(content) {
			this.activeContent = content
		},
	},
}
</script>
