<template>
	<section
		class="main-container border-4 border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg flex flex-col text-sm relative transition-colors duration-300"
	>
		<ThemeToggle />
		<nav
			class="flex-none flex justify-between text-light-text dark:text-dark-text border-b-4 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface transition-colors duration-300"
		>
			<div
				class="border-r-4 border-light-border dark:border-dark-border py-2 px-8 w-fit md:w-60 hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
			>
				<NuxtLink to="/" class="block no-underline">
					<h1 class="text-light-text dark:text-dark-text font-bold transition-colors duration-300">aniket-singh</h1>
				</NuxtLink>
			</div>

			<ul class="items-center w-full flex-1 hidden md:flex">
				<li v-for="nav in navLinks" :key="nav.to">
					<NuxtLink
						class="h-full py-2 px-6 block border-r-4 border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer transition-all duration-200 font-semibold hover:shadow-brutal-sm no-underline"
						:to="nav.to"
						:target="nav.blank == true && '_blank'"
					>
						{{ nav.name }}
					</NuxtLink>
				</li>
				<li class="flex-1" aria-disabled="true"></li>
				<li>
					<NuxtLink
						class="h-full py-2 px-6 block border-l-4 border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer transition-all duration-200 font-semibold hover:shadow-brutal-sm no-underline"
						to="/contact"
					>
						_contact-me
					</NuxtLink>
				</li>
			</ul>
			<button class="px-4 md:hidden" @click="isOpen = !isOpen">
				<Icon
					:name="isOpen ? 'ic:baseline-close' : 'pajamas:hamburger'"
				/>
			</button>
		</nav>
		<nav
			:class="isOpen === true ? 'flex' : 'hidden'"
			class="text-light-text dark:text-dark-text absolute my-9 justify-center w-full z-10 bg-light-card dark:bg-dark-card py-2 border-4 border-light-border dark:border-dark-border shadow-brutal transition-colors duration-300"
		>
			<ul class="">
				<li v-for="nav in navLinks" :key="nav.to">
					<NuxtLink
						class="py-2 px-6 block hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer text-center font-semibold transition-all duration-200"
						:to="nav.to"
						:target="nav.blank == true && '_blank'"
					>
						{{ nav.name }}
					</NuxtLink>
				</li>
				<li class="flex-1" aria-disabled="true"></li>
				<li>
					<NuxtLink
						class="py-2 px-6 block hover:bg-bg-hover-color hover:cursor-pointer text-center"
						to="/contact"
					>
						_contact-me
					</NuxtLink>
				</li>
			</ul>
		</nav>

		<section class="flex-1 overflow-y-auto hide-scrollbar relative">
			<slot></slot>
		</section>
		<nav
			class="flex-none flex text-light-text dark:text-dark-text border-t-4 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface transition-colors duration-300"
		>
			<div
				class="hidden md:flex h-full items-center border-r-4 border-light-border dark:border-dark-border py-2 px-8 text-sm font-semibold"
			>
				<p>find me in:</p>
			</div>
			<ul class="flex justify-start flex-1">
				<li
					class="py-2 px-6 border-r-4 border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
				>
					<a href="https://linkedin.com/in/aniket-singh-80371b201" class="block transition-transform duration-200 hover:scale-110">
						<Icon name="uil:linkedin" size="20px" />
					</a>
				</li>
				<li
					class="py-2 px-6 border-r-4 border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
				>
					<a href="https://twitter.com/singhaniket06" class="block transition-transform duration-200 hover:scale-110">
						<Icon name="uil:twitter" size="20px" />
					</a>
				</li>
				<li
					class="py-2 px-6 border-r-4 border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
				>
					<a href="https://instagram.com/aniket_letsbug/" class="block transition-transform duration-200 hover:scale-110">
						<Icon name="uil:instagram" size="20px" />
					</a>
				</li>
				<li class="flex-1" aria-disabled="true"></li>
				<li
					class="py-2 px-6 border-l-4 border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover hover:cursor-pointer transition-all duration-200 hover:shadow-brutal-sm"
				>
				<a href="https://github.com/Aniket-git-hub" class="block transition-transform duration-200 hover:scale-110 font-semibold no-underline">
					<span class="pr-2 hidden md:inline-block"
						>@aniket-git-hub</span
					>
					<Icon name="uil:github" size="20px" />
				</a>
				</li>
			</ul>
		</nav>
	</section>
</template>
<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
const navLinks = ref([
	{ name: "_hello", to: "/" },
	{ name: "_about-me", to: "/about" },
	{ name: "_projects", to: "/projects" },
	{ name: "_blog", to: "https://blog.letsbug.in", blank: true },
])
const isOpen = ref(false)
const route = useRoute()
watch(route, () => {
	isOpen.value = false
})
</script>
<style type="text/css">
.main-container {
	width: 100vw;
	height: 100vh;
}

body {
	min-height: 100vh;
	max-height: 100vh;
	background-color: #ffffff;
	display: grid;
	place-items: center;
	font-family: "Fira Code", system-ui, -apple-system, sans-serif;
	transition: background-color 0.3s ease;
}

body.dark {
	background-color: #0a0a0a;
}

/* Active nav link indicator - only for nav items, not logo */
nav ul li .router-link-active,
nav ul li .nuxt-link-active {
	border-bottom: 4px solid;
	border-color: #000000;
	font-weight: 700;
	text-decoration: none !important;
}

.dark nav ul li .router-link-active,
.dark nav ul li .nuxt-link-active {
	border-color: #00ff88;
	text-decoration: none !important;
}

/* Logo/home link should never have border */
nav > div .router-link-active,
nav > div .nuxt-link-active {
	border-bottom: none !important;
}

/* Ensure no underlines on any links - override everything */
nav a,
footer a,
header a,
a.nuxt-link-active,
a.router-link-active,
a:hover,
a:focus,
a:visited,
a:active {
	text-decoration: none !important;
	border-bottom: none !important;
	box-shadow: none !important;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
