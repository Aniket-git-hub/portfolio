<template>
	<section
		class="main-container border border-border-color mt-6 rounded-lg overflow-hidden bg-editor-bg flex flex-col"
	>
		<nav
			class="w-full flex text-editor-text-color border-b border-border-color"
		>
			<div
				class="border-r border-border-color py-2 px-6 w-60 hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
			>
				<NuxtLink to="/">
					<h1>aniket-singh</h1>
				</NuxtLink>
			</div>
			<ul class="flex justify-start flex-1">
				<li
					class="py-2 px-3 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<NuxtLink to="/" exact> _hello </NuxtLink>
				</li>
				<li
					class="py-2 px-3 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<NuxtLink to="/about"> _about-me </NuxtLink>
				</li>
				<li
					class="py-2 px-3 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<NuxtLink to="/projects"> _projects </NuxtLink>
				</li>
				<li class="flex-1" aria-disabled="true"></li>
				<li
					class="py-2 px-6 border-l border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<NuxtLink to="/contact"> _contact-me </NuxtLink>
				</li>
			</ul>
		</nav>
		<section class="flex-1">
			<slot></slot>
		</section>
		<nav
			class="w-full flex text-editor-text-color border-t border-border-color"
		>
			<div class="border-r border-border-color py-2 px-6">
				<p>find me in:</p>
			</div>
			<ul class="flex justify-start flex-1">
				<li
					class="py-2 px-3 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<a href="https://linkedin.com/in/aniket-singh-80371b201">
						linkedin
					</a>
				</li>
				<li
					class="py-2 px-3 border-r border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<a href="https://twitter.com/singhaniket06"> twitter </a>
				</li>
				<li class="flex-1" aria-disabled="true"></li>
				<li
					class="py-2 px-6 border-l border-border-color hover:text-white hover:bg-bg-hover-color hover:cursor-pointer"
				>
					<a href="https://github.com/Aniket-git-hub">
						@aniket-git-hub
					</a>
				</li>
			</ul>
		</nav>
	</section>
</template>
<style type="text/css">
.main-container {
	width: 95vw;
	height: 90vh;
}

body {
	height: 100vh;
	background-color: #000d1d;
	display: grid;
	place-items: center;
	font-family: "Fira Code";
}
</style>
