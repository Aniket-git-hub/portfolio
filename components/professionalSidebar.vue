<template>
	<section class="w-full">
		<div class="border-b border-border-color p-2">
			<Icon name="mdi:triangle-down" size="8px" />
			professional-info
		</div>
		<ul class="border-b border-border-color p-2">
			<li class="py-2">
				<Accordion
					:title="'experiences'"
					closedIcon="flat-color-icons:folder"
					openIcon="flat-color-icons:opened-folder"
				>
					<button
						class="pl-3 p-1"
						@click="selectedComponent('Experiences')"
					>
						experiences.md
					</button>
				</Accordion>
			</li>
			<li class="py-2">
				<Accordion
					:title="'hard-skills'"
					closedIcon="flat-color-icons:folder"
					openIcon="flat-color-icons:opened-folder"
				>
					<button
						class="pl-3 p-1"
						@click="selectedComponent('HardSkills')"
					>
						hardSkills.md
					</button>
				</Accordion>
			</li>
			<li class="py-2">
				<Accordion
					:title="'soft-skills'"
					closedIcon="flat-color-icons:folder"
					openIcon="flat-color-icons:opened-folder"
				>
					<button
						class="pl-3 p-1"
						@click="selectedComponent('SoftSkills')"
					>
						softSkills.md
					</button>
				</Accordion>
			</li>
		</ul>
		<div class="border-b border-border-color p-2">
			<Icon name="mdi:triangle-down" size="8px" />
			contacts
		</div>
		<div class="flex px-4 py-2">
			<Icon name="mdi:email" class="pr-2" size="24px" />
			<a href="mailto:singhdharmvir81@gmail.com">me@letsbug.in</a>
		</div>
		<div class="flex px-4 py-2">
			<Icon name="mdi:phone" class="pr-2" size="24px" />
			<a href="tel:+917559410568">+917559410568</a>
		</div>
	</section>
</template>
<script>
export default {
	mounted() {
		this.$parent.changeContent("ByDefault")
	},
	methods: {
		selectedComponent(name) {
			this.$parent.changeContent(name)
		},
	},
}
</script>
