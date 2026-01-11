<template>
	<section class="flex-1 flex overflow-hidden h-full">
		<section class="w-full border-r-4 border-light-border dark:border-dark-border flex flex-col h-full">
			<!-- Tab Bar -->
			<ul class="border-b-4 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface transition-colors duration-300 flex flex-shrink-0">
				<li 
					v-for="(tab, index) in tabs" 
					:key="tab.id"
					class="border-r-4 border-light-border dark:border-dark-border relative group"
					:class="activeTabId === tab.id ? 'bg-light-card dark:bg-dark-card' : 'hover:bg-light-hover dark:hover:bg-dark-hover'"
				>
					<button
						@click="setActiveTab(tab.id)"
						class="px-4 py-2 flex items-center gap-2 font-semibold text-light-text dark:text-dark-text transition-all duration-200"
						:class="activeTabId === tab.id ? 'font-black' : ''"
					>
						<Icon :name="getFileIcon(tab.filename)" size="18px" />
						<span>{{ tab.filename }}</span>
						<button
							@click.stop="closeTab(tab.id)"
							class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-light-accent-2 dark:hover:bg-dark-accent-2 hover:text-light-bg dark:hover:text-dark-bg p-1"
							v-if="tabs.length > 1"
						>
							<Icon name="mdi:close" size="14px" />
						</button>
					</button>
					<div 
						v-if="activeTabId === tab.id"
						class="absolute bottom-0 left-0 right-0 h-1 bg-light-accent dark:bg-dark-accent"
					></div>
				</li>
			</ul>
			
			<!-- Code Content -->
			<section class="flex-1 flex relative overflow-hidden min-h-0">
				<!-- Line Numbers -->
				<div 
					class="w-12 border-r-4 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-2 text-right font-mono text-sm text-light-text-secondary dark:text-dark-text-secondary select-none transition-colors duration-300 overflow-y-auto hide-scrollbar flex-shrink-0"
					v-if="showLineNumbers"
					style="line-height: 2rem; padding-top: 1rem; padding-bottom: 1rem;"
				>
					<div v-for="n in lineCount" :key="n" style="line-height: 2rem; min-height: 2rem; display: block;">
						{{ n }}
					</div>
				</div>
				
				<!-- Code Content -->
				<article 
					class="flex-1 p-4 overflow-y-auto hide-scrollbar font-mono text-sm relative"
					:class="codeClass"
					style="line-height: 2rem; padding-top: 1rem; padding-bottom: 1rem;"
				>
					<pre 
						class="m-0"
						:class="`language-${activeTab?.language || language}`"
						style="line-height: 2rem; margin: 0; padding: 0;"
					><code 
						ref="codeElement"
						:class="`language-${activeTab?.language || language}`"
						v-html="highlightedCode"
						style="line-height: 2rem; display: block; margin: 0; padding: 0;"
					></code></pre>
					
					<!-- Copy Button -->
					<button
						@click="copyCode"
						class="absolute top-4 right-4 p-2 bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none z-10"
						:class="copied ? 'bg-light-accent dark:bg-dark-accent' : ''"
						:title="copied ? 'Copied!' : 'Copy code'"
					>
						<Icon :name="copied ? 'mdi:check' : 'mdi:content-copy'" size="18px" />
					</button>
				</article>
				
				<!-- Scrollbar Indicator -->
				<div
					class="w-4 border-l-4 border-light-border dark:border-dark-border flex justify-center py-2"
				>
					<div class="bg-light-border dark:bg-dark-border w-3 h-2"></div>
				</div>
			</section>
		</section>
	</section>
</template>

<script setup lang="ts">
import Prism from 'prismjs'

interface Tab {
	id: string
	filename: string
	code: string
	language?: string
}

const props = withDefaults(defineProps<{
	tabs: Tab[]
	defaultTab?: string
	showLineNumbers?: boolean
	language?: string
}>(), {
	showLineNumbers: true,
	language: 'javascript'
})

const activeTabId = ref(props.defaultTab || props.tabs[0]?.id || '')
const codeElement = ref<HTMLElement | null>(null)
const copied = ref(false)

const activeTab = computed(() => {
	return props.tabs.find(tab => tab.id === activeTabId.value) || props.tabs[0]
})

const code = computed(() => {
	return activeTab.value?.code || ''
})

const highlightedCode = computed(() => {
	if (!code.value) return ''
	
	const lang = activeTab.value?.language || props.language
	
	// Handle plain text files
	if (lang === 'text' || lang === 'txt') {
		return code.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')
	}
	
	try {
		const prismLang = Prism.languages[lang] || Prism.languages.javascript
		return Prism.highlight(code.value, prismLang, lang)
	} catch (e) {
		// Fallback: escape HTML
		return code.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')
	}
})

const lineCount = computed(() => {
	return code.value.split('\n').length
})

const codeClass = computed(() => {
	return `language-${activeTab.value?.language || props.language}`
})

const setActiveTab = (id: string) => {
	activeTabId.value = id
}

const closeTab = (id: string) => {
	if (props.tabs.length <= 1) return
	
	const index = props.tabs.findIndex(tab => tab.id === id)
	if (index === -1) return
	
	if (activeTabId.value === id) {
		// Switch to next tab or previous if closing last
		const nextIndex = index < props.tabs.length - 1 ? index + 1 : index - 1
		activeTabId.value = props.tabs[nextIndex].id
	}
	
	// Emit event to parent to handle tab removal
	emit('close-tab', id)
}

const copyCode = async () => {
	try {
		await navigator.clipboard.writeText(code.value)
		copied.value = true
		setTimeout(() => {
			copied.value = false
		}, 2000)
	} catch (err) {
		console.error('Failed to copy:', err)
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

const emit = defineEmits<{
	'close-tab': [id: string]
	'active-tab-change': [id: string]
}>()

watch(activeTabId, (newId) => {
	emit('active-tab-change', newId)
})

onMounted(() => {
	// Load Prism CSS themes dynamically based on current theme
	loadPrismTheme()
	
	// Add keyboard shortcuts
	document.addEventListener('keydown', handleKeyboardShortcuts)
})

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeyboardShortcuts)
})

const handleKeyboardShortcuts = (e: KeyboardEvent) => {
	// Ctrl/Cmd + K to copy
	if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
		e.preventDefault()
		copyCode()
	}
	
	// Ctrl/Cmd + W to close tab
	if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
		e.preventDefault()
		if (props.tabs.length > 1) {
			closeTab(activeTabId.value)
		}
	}
}

const { theme } = useTheme()
watch(theme, () => {
	loadPrismTheme()
})

const loadPrismTheme = () => {
	// Remove existing Prism theme
	const existingLink = document.querySelector('link[data-prism-theme]')
	if (existingLink) {
		existingLink.remove()
	}
	
	// Add new theme based on current theme
	const link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = theme.value === 'dark' 
		? 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css'
		: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css'
	link.setAttribute('data-prism-theme', 'true')
	document.head.appendChild(link)
}
</script>

<style scoped>
/* Override Prism styles for neo-brutalism */
:deep(.token) {
	text-shadow: none !important;
}

:deep(pre[class*="language-"]) {
	background: transparent !important;
	margin: 0 !important;
	padding: 0 !important;
	border: none !important;
	box-shadow: none !important;
	overflow: visible !important;
}

:deep(code[class*="language-"]) {
	background: transparent !important;
	color: inherit !important;
	text-shadow: none !important;
	font-family: 'Fira Code', monospace !important;
	white-space: pre !important;
	word-wrap: normal !important;
	overflow-wrap: normal !important;
}

/* Ensure code lines match line numbers */
:deep(code[class*="language-"] .token-line) {
	display: block;
	line-height: 2rem;
	min-height: 2rem;
}
</style>
