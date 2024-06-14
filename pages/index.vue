<template>
	<main class="flex justify-center align-middle h-full text-sm">
		<section class="mt-28 pl-6">
			<article class="text-white">
				<p class="py-1 text-white">Hi all, I am</p>
				<h1 class="text-6xl py-1 text-white">Aniket Singh</h1>
				<h3 class="text-editor-blue text-3xl pt-1">> Web Dev</h3>
				<a
					class="px-4 py-2 m-1 mt-3 bg-blue-500 block w-fit hover:cursor-pointer"
					href="https://drive.google.com/file/d/1FFiJL54IfZM3ndIVAo6U8jbgt3QyyC2M/view"
					download
					>Download Resume</a
				>
				<!-- <a
					class="px-4 py-2 m-1 mt-3 bg-blue-500 block w-fit hover:cursor-pointer"
					href="../assets/file/AniketSinghResume.pdf"
					download
					>Download Resume</a
				> -->
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
						target="_blank"
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
						href="https://aniket-git-hub.github.io/32si/"
						target="_blank"
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
	title: "Aniket Singh - Aspiring Full-Stack Developer | PHP, Node.js, Java, JavaScript, Python",
	ogTitle:
		"Aniket Singh - Aspiring Full-Stack Developer | PHP, Node.js, Java, JavaScript, Python",
	description:
		"Welcome to the portfolio of Aniket Singh, an aspiring Full-Stack Developer with expertise in PHP, Node.js, Java, JavaScript, and Python. Explore my projects, skills, and experiences in web development, including e-commerce platforms, real-time chat applications, and more. Passionate about building innovative web solutions and eager to contribute to dynamic teams. Connect with me to collaborate on your next tech project.",
	ogDescription:
		"Welcome to the portfolio of Aniket Singh, an aspiring Full-Stack Developer with expertise in PHP, Node.js, Java, JavaScript, and Python. Explore my projects, skills, and experiences in web development, including e-commerce platforms, real-time chat applications, and more. Passionate about building innovative web solutions and eager to contribute to dynamic teams. Connect with me to collaborate on your next tech project.",
	ogImage: "https://portfolio-5b3g.vercel.app/_nuxt/portfolio.1dd383b9.png",
	twitterCard: "summary_large_image",
})
</script>
