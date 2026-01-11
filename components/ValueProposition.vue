<template>
	<section class="bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal-lg p-4 md:p-6 my-4 md:my-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
		<h3 class="text-xl md:text-2xl font-black text-light-text dark:text-dark-text mb-4">
			Why Hire Me?
		</h3>
		<ul class="space-y-3">
			<li class="flex items-start gap-2 md:gap-3">
				<Icon name="mdi:check-circle" class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1" size="18px" />
				<span class="text-light-text dark:text-dark-text font-semibold text-sm md:text-base">
					<strong class="text-light-accent dark:text-dark-accent">Production-Ready Experience:</strong> Currently building AI-powered applications at DSHGSonic with real-world impact
				</span>
			</li>
			<li class="flex items-start gap-2 md:gap-3">
				<Icon name="mdi:check-circle" class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1" size="18px" />
				<span class="text-light-text dark:text-dark-text font-semibold text-sm md:text-base">
					<strong class="text-light-accent dark:text-dark-accent">Full-Stack Expertise:</strong> Laravel, PHP, Next.js, Node.js, Python - end-to-end development capability
				</span>
			</li>
			<li class="flex items-start gap-2 md:gap-3">
				<Icon name="mdi:check-circle" class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1" size="18px" />
				<span class="text-light-text dark:text-dark-text font-semibold text-sm md:text-base">
					<strong class="text-light-accent dark:text-dark-accent">AI/LLM Specialist:</strong> Hands-on experience deploying LLMs (Code Llama, Mistral) to production
				</span>
			</li>
			<li class="flex items-start gap-2 md:gap-3">
				<Icon name="mdi:check-circle" class="text-light-accent dark:text-dark-accent flex-shrink-0 mt-1" size="18px" />
				<span class="text-light-text dark:text-dark-text font-semibold text-sm md:text-base">
					<strong class="text-light-accent dark:text-dark-accent">Scalable Solutions:</strong> Docker, microservices, distributed systems with Celery & Redis
				</span>
			</li>
		</ul>
		<div class="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
			<a
				href="https://docs.google.com/document/d/1Hi0kbj7idXK0r9-PTLdqspbpL9wDMRhf/export?format=pdf"
				class="bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg px-5 py-3 md:px-6 md:py-3 border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold inline-block text-center text-sm md:text-base touch-manipulation min-h-[44px] flex items-center justify-center"
				target="_blank"
			>
				Download Resume
			</a>
			<NuxtLink
				to="/contact"
				class="bg-light-border dark:bg-dark-border text-light-bg dark:text-dark-bg px-5 py-3 md:px-6 md:py-3 border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold inline-block text-center text-sm md:text-base touch-manipulation min-h-[44px] flex items-center justify-center"
			>
				Let's Talk
			</NuxtLink>
		</div>
		
		<!-- Availability Badge -->
		<div class="mt-4 inline-flex items-center gap-2 bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg px-4 py-2 border-4 border-light-border dark:border-dark-border shadow-brutal font-bold">
			<Icon name="mdi:circle" size="8px" class="animate-pulse" />
			<span>Available for opportunities</span>
		</div>
	</section>
</template>
