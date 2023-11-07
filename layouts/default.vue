<template>
	<section
		class="main-container border border-border-color bg-editor-bg flex flex-col text-sm relative"
	>
		<nav
			class="flex-none flex justify-between text-editor-text-color border-b border-border-color"
		>
			<div
				class="border-r border-border-color py-2 px-8 w-fit md:w-60 hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
			>
				<NuxtLink to="/">
					<h1 class="text-white">aniket-singh</h1>
				</NuxtLink>
			</div>

			<ul class="items-center w-full flex-1 hidden md:flex">
				<li v-for="nav in navLinks" :key="nav.to">
					<NuxtLink
						class="h-full py-2 px-6 block border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
						:to="nav.to"
						:target="nav.blank == true && '_blank'"
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
			<button class="px-4 md:hidden" @click="isOpen = !isOpen">
				<Icon
					:name="isOpen ? 'ic:baseline-close' : 'pajamas:hamburger'"
				/>
			</button>
		</nav>
		<nav
			:class="isOpen === true ? 'flex' : 'hidden'"
			class="text-white absolute my-9 justify-center w-full z-10 bg-editor-bg py-2 border border-border-color"
		>
			<ul class="">
				<li v-for="nav in navLinks" :key="nav.to">
					<NuxtLink
						class="py-2 px-6 block hover:bg-bg-hover-color hover:cursor-pointer text-center"
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
			class="flex-none flex text-editor-text-color border-t border-border-color"
		>
			<div
				class="hidden md:flex h-full items-center border-r border-border-color py-2 px-8 text-sm"
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
						<span class="pr-2 hidden md:inline-block"
							>@aniket-git-hub</span
						>
						<Icon name="uil:github" />
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
	background-color: #000d1d;
	display: grid;
	place-items: center;
	font-family: "Fira Code";
}
.router-link-active {
	border-bottom: 2px solid #fea55f;
	font-family: "Fira code retina";
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
