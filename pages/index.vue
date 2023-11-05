<template>
	<main class="flex justify-center align-middle h-full text-sm">
		<section class="mt-28">
			<article class="text-white">
				<p class="py-1">Hi all, I am</p>
				<h1 class="text-6xl py-1">Aniket Singh</h1>
				<h3 class="text-editor-blue text-3xl pt-1">> Web Developer</h3>
			</article>
			<article class="text-editor-text-color mt-16">
				<p class="py-1">// want to play a interesting board game</p>
				<p class="py-1">// you can see it on my GitHub page</p>
				<p class="py-1">
					<span class="text-editor-blue">const </span>
					<span class="text-editor-green">githubLink </span>
					<span> = </span>
					<a
						href="https://github.com/aniket-git-hub/"
						class="underline text-quote-text-color"
					>
						"https//github.com/aniket-git-hub"
					</a>
				</p>
			</article>
		</section>
		<section class="hidden md:flex mt-28 pl-20 justify-center align-middle">
			<article
				class="max-w-md h-fit rounded-lg shadow-sm bg-card-bg flex"
			>
				<img
					class="rounded-md overflow-hidden border max-h-96 border-gray-950"
					src="../assets/dashboard.png"
					alt="32Beads Game"
				/>
				<section class="w-1/2 p-4 text-white">
					<h3 class="text-xl font-semibold">32 Beads Game</h3>
					<p class="mb-5 mt-2">It's online multiplayer board game.</p>
					<a
						class="bg-card-btn p-2 rounded-sm mt-20"
						href="https://32si.vercel.app/"
					>
						Play Game
					</a>
				</section>
			</article>
		</section>
	</main>
</template>

<script setup lang="ts">
useSeoMeta({
	title: "Aniket singh | letsbug",
	ogTitle: "Aniket singh | letsbug",
	description: "Hi, I am aniket singh.",
	ogDescription: "Hi, I am aniket singh.",
	ogImage: "https://portfolio-5b3g.vercel.app/_nuxt/dashboard.dd0da0a5.png",
	twitterCard: "summary_large_image",
})
</script>
