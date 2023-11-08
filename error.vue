<template>
	<NuxtLayout>
		<div class="w-full grid place-items-center">
			<div class="w-fit text-white mt-20">
				<template v-if="error.statusCode === 404">
					<h1 class="text-8xl font-bold">404!</h1>
					<p class="mb-5">Sorry, that page doesn't exist.</p>
				</template>
				<template v-else>
					<h1>Dang</h1>
					<p>
						<strong>{{ error.message }}</strong>
					</p>
					<p>It looks like something broke.</p>
					<p>Sorry about that.</p>
				</template>
				<NuxtLink
					href="/"
					class="rounded-md bg-card-btn p-2 px-4 m-4 mt-10"
				>
					Home
				</NuxtLink>
			</div>
		</div>
	</NuxtLayout>
</template>
<script setup>
const error = useError()
</script>
