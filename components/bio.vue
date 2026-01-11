<template>
	<CodeEditor
		:tabs="bioTabs"
		:show-line-numbers="true"
		language="text"
	/>
</template>
<script>
export default {
	data() {
		return {
			bioTabs: [
				{
					id: 'bio',
					filename: 'bio.txt',
					language: 'text',
					code: `Greetings! I am a Software Engineer with a passion
for building scalable, production-ready applications.
Currently working at DSHGSonic, I specialize in
full-stack development with expertise in modern
technologies including Laravel, PHP, Node.js, Next.js,
and Python. I have hands-on experience with LLMs,
including model training, deployment, and production
optimization. My work spans across Docker containerization,
distributed systems with Celery and Redis, and building
AI-powered applications. I thrive on solving complex
problems and delivering high-quality solutions that
impact businesses. Let's build something amazing together!`
				}
			]
		}
	}
}
</script>

