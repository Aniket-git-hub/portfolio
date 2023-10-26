<template>
	<section class="h-full flex text-sm text-white">
		<section class="border-r border-border-color w-60 flex">
			<section class="w-full">
				<div class="border-b border-border-color p-2">
					<Icon name="mdi:triangle-down" size="8px" />
					contacts
				</div>
				<div class="flex px-4 py-2">
					<Icon name="mdi:email" class="pr-2" size="24px" />
					<p>me@letsbug.in</p>
				</div>
				<div class="flex px-4 py-2">
					<Icon name="mdi:phone" class="pr-2" size="24px" />
					<p>+917559410568</p>
				</div>
				<div class="border-y border-border-color p-2">
					<Icon name="mdi:triangle-down" size="8px" />
					find-me-also-in
				</div>
				<ul class="p-2">
					<li class="py-2" v-for="l in externalLinks" :key="l.name">
						<a :href="l.to">
							<Icon name="mdi:external-link" />
							{{ l.name }}
						</a>
					</li>
				</ul>
			</section>
		</section>
		<section class="flex-1 flex overflow-hidden">
			<section class="w-1/2 border-r border-border-color">
				<ul class="border-b border-border-color">
					<li class="border-r border-border-color w-fit p-2 px-4">
						<Icon name="mdi:vuejs" size="18px" />
						contactPage.vue
						<Icon name="mdi:close" size="18px" />
					</li>
				</ul>
				<section class="h-full flex">
					<article class="flex-1 p-4">
						<p>
							1 2 3 4 5 6 7 8 9 10 11 12 13 14 const button =
							document.querySelector ( '#sendBtn' ); const message
							= { name : "" , email : "" , message : "" , date:
							"Thu Oct 26 2023" } button.addEventListener (
							'click' ), () => { form.send ( message ); })
						</p>
					</article>
					<div
						class="w-4 border-l border-border-color flex justify-center py-2"
					>
						<div class="bg-border-color w-3 h-2"></div>
					</div>
				</section>
			</section>
			<section class="w-1/2">
				<ul class="border-b border-border-color">
					<li class="border-r border-border-color w-fit p-2 px-4">
						<Icon name="mdi:internet" size="18px" />
						preview
						<Icon name="mdi:close" size="18px" />
					</li>
				</ul>
				<section class="h-full flex">
					<article class="flex-1 p-4 flex justify-center">
						<form
							class="bg-card-bg mt-4 w-fit p-8 rounded-md h-fit"
						>
							<h3 class="text-lg mb-4">Your Feedback Matters</h3>
							<div class="text-white my-2">
								<label class="block mb-1">_name:</label>
								<input
									class="bg-editor-bg border-2 border-border-color rounded-md px-4 py-2"
									type="text"
								/>
							</div>

							<div class="text-white my-2">
								<label class="block mb-1">_email:</label>
								<input
									class="bg-editor-bg border-2 border-border-color rounded-md px-4 py-2"
									type="email"
									placeholder
								/>
							</div>

							<div class="text-white my-2">
								<label class="block mb-1">_message:</label>
								<textarea
									class="bg-editor-bg border-2 border-border-color rounded-md px-4 py-2 w-full"
									rows="5"
								></textarea>
							</div>

							<button
								class="px-4 mt-4 py-2 bg-card-btn rounded-md"
							>
								Submit
							</button>
						</form>
					</article>
					<div
						class="w-4 border-l border-border-color flex justify-center py-2"
					>
						<div class="bg-border-color w-3 h-2"></div>
					</div>
				</section>
			</section>
		</section>
	</section>
</template>
<script>
export default {
	data() {
		return {
			externalLinks: [
				{
					name: "YouTube Channel",
					to: "https://www.youtube.com/@_letsBug",
				},
				{
					name: "HackerRank",
					to: "https://www.hackerrank.com/profile/singhdharmvir81",
				},
				{
					name: "LeetCode",
					to: "https://leetcode.com/Aniket-git-hub/",
				},
			],
		}
	},
}
</script>
