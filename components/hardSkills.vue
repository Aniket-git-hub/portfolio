<template>
	<section class="flex-1 flex overflow-hidden">
		<section class="w-full border-r-4 border-light-border dark:border-dark-border">
			<ul class="border-b-4 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface transition-colors duration-300">
				<li class="border-r-4 border-light-border dark:border-dark-border w-fit p-2 px-4 font-black text-light-text dark:text-dark-text">
					hard-skills
					<Icon name="mdi:close" size="18px" />
				</li>
			</ul>
			<section class="h-full flex pb-4">
				<article
					class="flex-1 p-4 flex flex-wrap overflow-auto hide-scrollbar mb-4"
				>
				<div
					class="w-fit h-fit bg-light-card dark:bg-dark-card p-3 md:p-4 m-2 md:m-4 border-4 border-light-border dark:border-dark-border flex justify-center items-center shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none cursor-default group"
					v-for="s in skills"
					:key="s.name"
				>
					<Icon :name="s.icon" size="30px" class="transition-transform duration-200 group-hover:scale-110" />
					<h1 class="text-lg md:text-xl pl-3 font-bold text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-200">{{ s.name }}</h1>
				</div>
				</article>
				<div
					class="w-4 border-l-4 border-light-border dark:border-dark-border flex justify-center py-2"
				>
					<div class="bg-light-border dark:bg-dark-border w-3 h-2"></div>
				</div>
			</section>
		</section>
	</section>
</template>
<script>
export default {
	data() {
		return {
			skills: [
				{ name: "Laravel", icon: "devicon:laravel" },
				{ name: "PHP", icon: "devicon:php" },
				{ name: "Node.js", icon: "vscode-icons:file-type-node" },
				{ name: "Next.js", icon: "skill-icons:nextjs-light" },
				{ name: "Python", icon: "logos:python" },
				{ name: "Docker", icon: "devicon:docker" },
				{ name: "Redis", icon: "devicon:redis" },
				{ name: "Celery", icon: "simple-icons:celery" },
				{ name: "LLMs", icon: "simple-icons:openai" },
				{ name: "Vue", icon: "devicon:vuejs" },
				{ name: "React", icon: "logos:react" },
				{ name: "TypeScript", icon: "logos:typescript-icon" },
				{ name: "JavaScript", icon: "logos:javascript" },
				{ name: "MongoDB", icon: "devicon:mongodb" },
				{ name: "PostgreSQL", icon: "devicon:postgresql" },
				{ name: "MySQL", icon: "logos:mysql" },
				{ name: "Express.js", icon: "skill-icons:expressjs-light" },
				{ name: "Nuxt", icon: "logos:nuxt-icon" },
				{ name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
				{ name: "Git", icon: "vscode-icons:file-type-git" },
				{ name: "GitHub", icon: "simple-icons:github" },
				{ name: "Vercel", icon: "logos:vercel-icon" },
				{ name: "HTML5", icon: "devicon:html5" },
				{ name: "CSS3", icon: "devicon:css3" },
			],
		}
	},
}
</script>
