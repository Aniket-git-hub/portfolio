<template>
	<main
		class="flex flex-col md:flex-row justify-start md:justify-between md:items-start items-start h-full text-sm overflow-y-auto hide-scrollbar pt-8 md:pt-0 px-4 md:px-8 gap-8"
		itemscope
		itemtype="https://schema.org/Person"
	>
		<section
			class="mt-4 md:mt-28 px-4 md:pl-6 animate-fade-in max-w-2xl pb-8 flex-shrink-0 md:flex-1 w-full"
		>
			<article class="text-light-text dark:text-dark-text">
				<p
					class="py-1 text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary animate-slide-down font-semibold"
				>
					Hi all, I am
				</p>
				<h1
					class="text-4xl md:text-6xl py-1 text-light-text dark:text-dark-text font-black animate-slide-up leading-tight"
				>
					Aniket Singh
				</h1>
				<h3
					class="text-light-accent dark:text-dark-accent text-2xl md:text-3xl pt-1 animate-slide-up font-bold"
					style="animation-delay: 0.1s"
				>
					> Software Engineer
				</h3>
				<p
					class="text-light-text dark:text-dark-text mt-4 text-base md:text-lg font-semibold max-w-xl"
				>
					Building scalable AI-powered applications at DSHGSonic.
					Specialized in full-stack development, LLM deployment, and
					production-ready solutions.
				</p>
				<div
					class="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mt-6"
				>
					<a
						class="px-5 py-3 md:px-6 md:py-3 bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg hover:cursor-pointer border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold text-sm md:text-base text-center"
						href="https://docs.google.com/document/d/1Hi0kbj7idXK0r9-PTLdqspbpL9wDMRhf/export?format=pdf"
						target="_blank"
						>Download Resume</a
					>
					<NuxtLink
						to="/contact"
						class="px-5 py-3 md:px-6 md:py-3 bg-light-border dark:bg-dark-border text-light-bg dark:text-dark-bg border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold text-sm md:text-base text-center"
					>
						Get In Touch
					</NuxtLink>
				</div>
				<!-- <a
					class="px-4 py-2 m-1 mt-3 bg-blue-500 block w-fit hover:cursor-pointer"
					href="../assets/file/AniketSinghResume.pdf"
					download
					>Download Resume</a
				> -->
			</article>
			<article
				class="text-light-text-secondary dark:text-dark-text-secondary mt-16 font-mono"
			>
				<p class="py-1">// currently working at DSHGSonic</p>
				<p class="py-1">// building AI-powered applications</p>
				<p class="py-1">
					<span class="text-light-accent-3 dark:text-dark-accent-3"
						>const
					</span>
					<span class="text-light-accent dark:text-dark-accent"
						>currentRole
					</span>
					<span> = </span>
					<span class="text-light-accent-2 dark:text-dark-accent-2"
						>"Software Engineer"</span
					>
				</p>
				<p class="py-1">
					<span class="text-light-accent-3 dark:text-dark-accent-3"
						>const
					</span>
					<span class="text-light-accent dark:text-dark-accent"
						>techStack
					</span>
					<span> = [</span>
					<span class="text-light-accent-2 dark:text-dark-accent-2"
						>"Laravel", "PHP", "Next.js", "Node.js", "Python",
						"Docker", "LLMs"</span
					>
					<span>]</span>
				</p>
			</article>

			<!-- Stats Section -->
			<section
				class="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-fade-in"
				style="animation-delay: 0.3s"
			>
				<StatsCard value="2+" label="Years Experience" />
				<StatsCard value="5+" label="Live Projects" />
				<StatsCard value="100%" label="Production Ready" />
				<StatsCard value="AI/LLM" label="Specialization" />
			</section>

			<!-- Key Achievements -->
			<article
				class="mt-8 md:mt-12 bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal-lg p-4 md:p-6 animate-fade-in"
				style="animation-delay: 0.4s"
			>
				<h3
					class="text-lg md:text-xl font-black text-light-text dark:text-dark-text mb-4"
				>
					Key Highlights
				</h3>
				<ul class="space-y-2 text-light-text dark:text-dark-text">
					<li class="flex items-start gap-2">
						<Icon
							name="mdi:check"
							class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1"
							size="18px"
						/>
						<span class="font-semibold text-sm md:text-base"
							>Currently building production AI applications at
							DSHGSonic</span
						>
					</li>
					<li class="flex items-start gap-2">
						<Icon
							name="mdi:check"
							class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1"
							size="18px"
						/>
						<span class="font-semibold text-sm md:text-base"
							>Deployed LLM models (Code Llama, Mistral) to
							production</span
						>
					</li>
					<li class="flex items-start gap-2">
						<Icon
							name="mdi:check"
							class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1"
							size="18px"
						/>
						<span class="font-semibold text-sm md:text-base"
							>Full-stack expertise: Laravel, PHP, Next.js,
							Node.js, Python</span
						>
					</li>
					<li class="flex items-start gap-2">
						<Icon
							name="mdi:check"
							class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1"
							size="18px"
						/>
						<span class="font-semibold text-sm md:text-base"
							>Built scalable systems with Docker, Celery,
							Redis</span
						>
					</li>
				</ul>
			</article>

			<!-- Mobile Value Proposition & Metrics -->
			<section class="md:hidden mt-8 space-y-6">
				<ValueProposition />
				<ImpactMetrics />
			</section>
		</section>
		<!-- Right Sidebar - Game Section -->
		<section
			class="flex flex-col mt-6 md:mt-28 justify-start items-start animate-fade-in gap-4 md:gap-6 max-w-md pb-8 w-full md:w-auto md:flex-shrink-0 md:sticky md:top-8 px-4 md:px-0"
			style="animation-delay: 0.2s"
		>
			<!-- Tic-Tac-Toe Game - Visible on ALL screens -->
			<div class="w-full">
				<TicTacToe />
			</div>

			<!-- Value Proposition - Desktop only -->
			<div class="hidden md:block">
				<ValueProposition />
			</div>

			<!-- Impact Metrics - Desktop only -->
			<div class="hidden md:block">
				<ImpactMetrics />
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
useHead({
	title: "Aniket Singh - Software Engineer | Full-Stack Developer | AI/LLM Specialist | Portfolio",
	meta: [
		{
			name: "description",
			content:
				"Aniket Singh - Software Engineer at DSHGSonic. Full-stack developer specializing in Laravel, PHP, Next.js, Node.js, Python, Docker, and LLM deployment. View portfolio, resume, and projects including PodcastInc AI, BookifyCall, and InformedALF.",
		},
		{
			name: "keywords",
			content:
				"Aniket Singh, Software Engineer, Full-Stack Developer, Laravel Developer, PHP Developer, Next.js Developer, Node.js Developer, Python Developer, AI Developer, LLM Specialist, Docker Expert, DSHGSonic, Portfolio, Resume, CV, Hire Software Engineer, Backend Developer, Frontend Developer, Web Developer, India",
		},
		{
			name: "author",
			content: "Aniket Singh",
		},
		{
			name: "robots",
			content:
				"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
		},
		{
			property: "og:title",
			content:
				"Aniket Singh - Software Engineer | Full-Stack Developer | AI/LLM Specialist",
		},
		{
			property: "og:description",
			content:
				"Software Engineer at DSHGSonic specializing in full-stack development with Laravel, PHP, Next.js, Node.js, and Python. Experienced in LLM deployment, Docker containerization, and building AI-powered applications.",
		},
		{
			property: "og:image",
			content: "https://aniket.letsbug.in/og-image.jpg",
		},
		{
			property: "og:url",
			content: "https://aniket.letsbug.in/",
		},
		{
			property: "og:type",
			content: "profile",
		},
		{
			property: "og:site_name",
			content: "Aniket Singh Portfolio",
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:title",
			content: "Aniket Singh - Software Engineer | Full-Stack Developer",
		},
		{
			name: "twitter:description",
			content:
				"Software Engineer at DSHGSonic. Full-stack developer with expertise in Laravel, PHP, Next.js, Node.js, Python, Docker, and LLM deployment.",
		},
		{
			name: "twitter:image",
			content: "https://aniket.letsbug.in/og-image.jpg",
		},
		{
			name: "linkedin:owner",
			content: "aniket-singh-80371b201",
		},
		{
			name: "canonical",
			content: "https://aniket.letsbug.in/",
		},
	],
	link: [
		{
			rel: "canonical",
			href: "https://aniket.letsbug.in/",
		},
	],
	script: [
		{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Aniket Singh",
				jobTitle: "Software Engineer",
				worksFor: {
					"@type": "Organization",
					name: "DSHGSonic",
				},
				url: "https://aniket.letsbug.in/",
				sameAs: [
					"https://www.linkedin.com/in/aniket-singh-80371b201",
					"https://github.com/Aniket-git-hub",
					"https://twitter.com/singhaniket06",
					"https://instagram.com/aniket_letsbug/",
				],
				email: "singhdharmvir81@gmail.com",
				telephone: "+917559410568",
				address: {
					"@type": "PostalAddress",
					addressCountry: "IN",
				},
				knowsAbout: [
					"Laravel",
					"PHP",
					"Next.js",
					"Node.js",
					"Python",
					"Docker",
					"LLM",
					"Machine Learning",
					"Full-Stack Development",
					"Backend Development",
					"Frontend Development",
					"AI Development",
					"Celery",
					"Redis",
					"PostgreSQL",
					"MongoDB",
					"MySQL",
				],
				alumniOf: {
					"@type": "EducationalOrganization",
				},
			}),
		},
		{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ProfilePage",
				mainEntity: {
					"@type": "Person",
					name: "Aniket Singh",
					jobTitle: "Software Engineer",
					description:
						"Full-stack developer specializing in Laravel, PHP, Next.js, Node.js, Python, Docker, and LLM deployment.",
				},
			}),
		},
	],
})
</script>
