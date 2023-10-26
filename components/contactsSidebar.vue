<template>
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
