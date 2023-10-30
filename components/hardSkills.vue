<template>
	<section class="flex-1 flex overflow-hidden">
		<section class="w-full border-r border-border-color">
			<ul class="border-b border-border-color">
				<li class="border-r border-border-color w-fit p-2 px-4">
					hard-skills
					<Icon name="mdi:close" size="18px" />
				</li>
			</ul>
			<section class="h-full flex">
				<article class="flex-1 p-4 flex flex-wrap">
					<div
						class="w-fit h-fit bg-card-bg p-4 m-4 rounded-lg border border-border-color flex justify-center items-center"
						v-for="s in skills"
						:key="s.name"
					>
						<Icon :name="s.icon" size="30px" />
						<h1 class="text-xl pl-3">{{ s.name }}</h1>
					</div>
				</article>
				<div
					class="w-4 border-l border-border-color flex justify-center py-2"
				>
					<div class="bg-border-color w-3 h-2"></div>
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
				{ name: "Node.js", icon: "vscode-icons:file-type-node" },
				{ name: "HTML", icon: "devicon:html5" },
				{ name: "CSS", icon: "devicon:css3" },
				{ name: "Vue", icon: "devicon:vuejs" },
				{ name: "React", icon: "logos:react" },
				{ name: "MongoDB", icon: "devicon:mongodb" },
				{ name: "Express.js", icon: "skill-icons:expressjs-light" },
				{ name: "Git", icon: "vscode-icons:file-type-git" },
				{ name: "GitHub", icon: "simple-icons:github" },
				{ name: "Python", icon: "logos:python" },
				{ name: "SQL", icon: "logos:mysql" },
				{ name: "Postgres", icon: "devicon:postgresql" },
				{ name: "Javascript", icon: "logos:javascript" },
				{ name: "Firebase", icon: "vscode-icons:file-type-firebase" },
				{ name: "Render", icon: "simple-icons:render" },
				{ name: "Vercel", icon: "logos:vercel-icon" },
				{ name: "Netlify", icon: "skill-icons:netlify-dark" },
				{ name: "Typescript", icon: "logos:typescript-icon" },
				{ name: "Java", icon: "devicon:java" },
				{ name: "Android SDK", icon: "openmoji:android" },
				{ name: "Postman", icon: "logos:postman-icon" },
				{ name: "Bootstrap", icon: "devicon:bootstrap" },
				{ name: "Tailwind", icon: "logos:tailwindcss-icon" },
				{ name: "Vuetify", icon: "devicon:vuetify" },
				{ name: "ChakraUI", icon: "simple-icons:chakraui" },
				{ name: "Heroku", icon: "skill-icons:heroku" },
				{ name: "VSCode", icon: "skill-icons:vscode-dark" },
				{ name: "Android Studio", icon: "devicon:androidstudio" },
				{ name: "Ubuntu", icon: "logos:ubuntu" },
				{ name: "MS Windows", icon: "logos:microsoft-windows-icon" },
				{ name: "Nuxt", icon: "logos:nuxt-icon" },
				{ name: "Material UI", icon: "devicon:materialui" },
				{ name: "Bulma", icon: "logos:bulma" },
				{ name: "SASS", icon: "devicon:sass" },
				{ name: "SQLite", icon: "vscode-icons:file-type-sqlite" },
			],
		}
	},
}
</script>
