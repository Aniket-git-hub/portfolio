<template>
	<section class="w-full h-full flex flex-col overflow-hidden">
		<FileExplorer
			:items="fileItems"
			title="professional-info"
			@select="handleFileSelect"
			class="flex-1 min-h-0"
		/>
		<div class="border-b-4 border-light-border dark:border-dark-border p-2 font-black text-light-text dark:text-dark-text flex-shrink-0">
			<Icon name="mdi:triangle-down" size="8px" />
			contacts
		</div>
		<div class="flex px-4 py-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-200 flex-shrink-0">
			<Icon name="mdi:email" class="pr-2" size="24px" />
			<a href="mailto:singhdharmvir81@gmail.com" class="font-semibold no-underline">me@letsbug.in</a>
		</div>
		<div class="flex px-4 py-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-200 flex-shrink-0">
			<Icon name="mdi:phone" class="pr-2" size="24px" />
			<a href="tel:+917559410568" class="font-semibold no-underline">+917559410568</a>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			fileItems: [
				{
					id: 'professional-info',
					name: 'professional-info',
					expanded: true,
					children: [
						{ id: 'experiences', name: 'experiences.md' },
						{ id: 'hard-skills', name: 'hardSkills.md' },
						{ id: 'soft-skills', name: 'softSkills.md' },
						{ id: 'education', name: 'education.md' },
					]
				}
			]
		}
	},
	mounted() {
		this.$parent.changeContent("ByDefault")
	},
	methods: {
		handleFileSelect(item) {
			const componentMap = {
				'experiences': 'Experiences',
				'hard-skills': 'HardSkills',
				'soft-skills': 'SoftSkills',
				'education': 'Education',
				'bio': 'Bio'
			}
			const componentName = componentMap[item.id] || 'ByDefault'
			this.$parent.changeContent(componentName)
		},
	},
}
</script>
