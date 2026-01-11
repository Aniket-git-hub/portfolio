<template>
	<section class="w-full border-r-4 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface transition-colors duration-300 h-full flex flex-col overflow-hidden">
		<div class="border-b-4 border-light-border dark:border-dark-border p-2 font-black text-light-text dark:text-dark-text flex-shrink-0">
			<Icon name="mdi:triangle-down" size="8px" />
			{{ title }}
		</div>
		<ul class="py-2 overflow-y-auto hide-scrollbar flex-1">
			<li
				v-for="item in items"
				:key="item.id"
				class="py-1"
			>
				<button
					@click="selectItem(item)"
					class="w-full px-4 py-2 flex items-center gap-2 text-left transition-all duration-200 font-semibold"
					:class="
						selectedId === item.id
							? 'bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg'
							: 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover hover:text-light-text dark:hover:text-dark-text'
					"
				>
					<Icon 
						:name="item.expanded ? 'flat-color-icons:opened-folder' : 'flat-color-icons:folder'" 
						size="16px"
						v-if="item.children"
					/>
					<Icon 
						:name="getFileIcon(item.name)" 
						size="16px"
						v-else
					/>
					<span>{{ item.name }}</span>
				</button>
				<ul 
					v-if="item.children && item.expanded"
					class="pl-6"
				>
					<li
						v-for="child in item.children"
						:key="child.id"
					>
						<button
							@click="selectItem(child)"
							class="w-full px-4 py-2 flex items-center gap-2 text-left transition-all duration-200 font-semibold"
							:class="
								selectedId === child.id
									? 'bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg'
									: 'text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover hover:text-light-text dark:hover:text-dark-text'
							"
						>
							<Icon 
								:name="getFileIcon(child.name)" 
								size="16px"
							/>
							<span>{{ child.name }}</span>
						</button>
					</li>
				</ul>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
interface FileItem {
	id: string
	name: string
	children?: FileItem[]
	expanded?: boolean
}

const props = defineProps<{
	items: FileItem[]
	title?: string
}>()

const emit = defineEmits<{
	'select': [item: FileItem]
}>()

const selectedId = ref<string | null>(null)

const selectItem = (item: FileItem) => {
	if (item.children) {
		// Toggle folder expansion
		item.expanded = !item.expanded
	} else {
		selectedId.value = item.id
		emit('select', item)
	}
}

const getFileIcon = (filename: string) => {
	const ext = filename.split('.').pop()?.toLowerCase()
	const iconMap: Record<string, string> = {
		'js': 'mdi:language-javascript',
		'ts': 'mdi:language-typescript',
		'jsx': 'mdi:language-javascript',
		'tsx': 'mdi:language-typescript',
		'vue': 'mdi:vuejs',
		'json': 'mdi:code-json',
		'md': 'mdi:markdown',
		'txt': 'carbon:txt',
		'py': 'mdi:language-python',
		'php': 'mdi:language-php',
		'html': 'mdi:language-html5',
		'css': 'mdi:language-css3',
	}
	return iconMap[ext || ''] || 'mdi:file-code'
}
</script>
