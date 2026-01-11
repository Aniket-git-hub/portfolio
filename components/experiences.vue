<template>
	<CodeEditor
		:tabs="experienceTabs"
		:show-line-numbers="true"
		language="markdown"
	/>
</template>
<script>
export default {
	data() {
		return {
			experienceTabs: [
				{
					id: 'experiences',
					filename: 'experiences.md',
					language: 'markdown',
					code: `## Software Engineer, DSHGSonic | June 2024 - Present

• Developing and maintaining full-stack applications
  using Laravel, PHP, Node.js, and Next.js
• Implementing and deploying LLM models (Code Llama,
  Mistral) for production use cases
• Building AI-powered features including model training,
  weight optimization, and deployment pipelines
• Working with Docker for containerization and
  orchestration of microservices
• Developing distributed systems using Python, Celery,
  and Redis for background processing
• Contributing to notable projects: PodcastInc AI,
  BookifyCall, and InformedALF
• Researching and prototyping MCP tools and
  multimedia processing solutions

## Backend Developer (Freelance), SFS Academy | Dec 2023 - Apr 2024

• Enhanced platform security by 30% with secure
  authentication and multi-factor authentication
• Implemented student login/registration and CMS for
  lecture videos and notes
• Developed admin interface and appointment booking
  system with calendar integration
• Managed 1,000+ student registrations and 500+
  appointments in first quarter`
				}
			]
		}
	}
}
</script>

