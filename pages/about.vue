<template>
	<section class="h-full flex text-sm text-white">
		<section class="border-r border-border-color w-60 flex">
			<section class="border-r border-border-color py-4">
				<div
					class="p-4 text-border-color hover:cursor-pointer hover:text-white"
				>
					<button>
						<Icon name="icon-park-solid:terminal" />
					</button>
				</div>
				<div
					class="p-4 text-border-color hover:cursor-pointer hover:text-white"
				>
					<button>
						<Icon name="icon-park-solid:personal-collection" />
					</button>
				</div>
				<div
					class="p-4 text-border-color hover:cursor-pointer hover:text-white"
				>
					<button>
						<Icon name="icon-park-solid:game-ps" />
					</button>
				</div>
			</section>
			<ExperiencesSidebar />
			<!-- <PersonalInfoSidebar /> -->
			<!-- <HobbiesInfo /> -->
		</section>
		<Experiences />
	</section>
</template>
