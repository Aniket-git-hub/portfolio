<template>
	<section class="w-full">
		<div class="border-b border-border-color p-2">
			<Icon name="mdi:triangle-down" size="8px" />
			personal-info
		</div>
		<ul class="border-b border-border-color p-2">
			<li class="py-2">
				<Icon name="mdi:chevron-down" />
				<Icon name="flat-color-icons:folder" />
				<button class="px-2" @click="$parent.changeContent('Bio')">
					bio
				</button>
			</li>
			<li class="py-2">
				<Icon name="mdi:chevron-down" />
				<Icon name="flat-color-icons:folder" />
				<button
					class="px-2"
					@click="$parent.changeContent('Interests')"
				>
					interests
				</button>
			</li>
			<li class="py-2">
				<Icon name="mdi:chevron-down" />
				<Icon name="flat-color-icons:folder" />
				<button
					class="px-2"
					@click="$parent.changeContent('Education')"
				>
					education
				</button>
			</li>
		</ul>
		<div class="border-b border-border-color p-2">
			<Icon name="mdi:triangle-down" size="8px" />
			contacts
		</div>
		<div class="flex px-4 py-2">
			<Icon name="mdi:email" class="pr-2" size="24px" />
			<a href="mailto:singhdharmvir81@gamil.com">me@letsbug.in</a>
		</div>
		<div class="flex px-4 py-2">
			<Icon name="mdi:phone" class="pr-2" size="24px" />
			<a href="tel:+917559410568">+917559410568</a>
		</div>
	</section>
</template>
<script>
export default {
	mounted() {
		this.$parent.changeContent("Bio")
	},
}
</script>
