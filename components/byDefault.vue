<template>
	<section class="flex-1 flex overflow-hidden">
		<section class="w-full border-r-4 border-light-border dark:border-dark-border">
			<section class="h-full flex">
				<article class="flex-1 p-4 flex flex-col justify-center items-center gap-6">
					<h2
						class="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text mb-4"
					>
						Open File To View
					</h2>
					<p class="text-light-text-secondary dark:text-dark-text-secondary text-center max-w-md font-semibold">
						Select a file from the sidebar to explore my professional journey, skills, and experiences.
					</p>
					<div class="mt-6 flex flex-wrap gap-4 justify-center">
						<button
							@click="$parent.changeContent('Bio')"
							class="bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg px-6 py-3 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold text-light-text dark:text-dark-text"
						>
							View Bio
						</button>
						<button
							@click="$parent.changeContent('Experiences')"
							class="bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg px-6 py-3 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none font-bold"
						>
							View Experience
						</button>
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
