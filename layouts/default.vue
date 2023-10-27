<template>
	<section
		class="main-container border border-border-color overflow-hidden bg-editor-bg flex flex-col text-sm"
	>
		<nav
			class="flex-none flex text-editor-text-color border-b border-border-color overflow-hidden"
		>
			<div
				class="border-r border-border-color py-2 px-8 w-60 hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
			>
				<NuxtLink to="/">
					<h1>aniket-singh</h1>
				</NuxtLink>
			</div>

			<ul class="flex items-center w-full flex-1">
				<li v-for="nav in navLinks" :key="nav.to">
					<NuxtLink
						class="h-full py-2 px-6 block border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
						:to="nav.to"
					>
						{{ nav.name }}
					</NuxtLink>
				</li>
				<li class="flex-1" aria-disabled="true"></li>
				<li>
					<NuxtLink
						class="h-full py-2 px-6 block border-l border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
						to="/contact"
					>
						_contact-me
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<section class="flex-1 h-full flex flex-col">
			<slot></slot>
		</section>
		<nav
			class="flex-none flex text-editor-text-color border-t border-border-color"
		>
			<div
				class="h-full flex items-center border-r border-border-color py-2 px-8 text-sm"
			>
				<p>find me in:</p>
			</div>
			<ul class="flex justify-start flex-1">
				<li
					class="py-2 px-6 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<a href="https://linkedin.com/in/aniket-singh-80371b201">
						<Icon name="uil:linkedin" />
					</a>
				</li>
				<li
					class="py-2 px-6 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<a href="https://twitter.com/singhaniket06">
						<Icon name="uil:twitter" />
					</a>
				</li>
				<li
					class="py-2 px-6 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<a href="https://instagram.com/aniketsingh6967/">
						<Icon name="uil:instagram" />
					</a>
				</li>
				<li class="flex-1" aria-disabled="true"></li>
				<li
					class="py-2 px-6 border-l border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<a href="https://github.com/Aniket-git-hub">
						@aniket-git-hub
						<Icon name="uil:github" />
					</a>
				</li>
			</ul>
		</nav>
	</section>
</template>
<script setup>
import { ref } from "vue"
const navLinks = ref([
	{ name: "_hello", to: "/" },
	{ name: "_about-me", to: "/about" },
	{ name: "_projects", to: "/projects" },
])
</script>
<style type="text/css">
.main-container {
	width: 100vw;
	height: 100vh;
}

body {
	height: 100vh;
	background-color: #000d1d;
	display: grid;
	place-items: center;
	font-family: "Fira Code";
}
.router-link-active {
	border-bottom: 2px solid #fea55f;
	font-family: "Fira code retina";
}
</style>
