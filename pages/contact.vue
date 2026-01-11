<template>
	<section class="h-full flex text-sm text-light-text dark:text-dark-text">
		<section class="border-r-4 border-light-border dark:border-dark-border md:w-60 flex bg-light-surface dark:bg-dark-surface transition-colors duration-300">
			<section class="w-full">
				<div
					class="border-b-4 border-light-border dark:border-dark-border text-light-text dark:text-dark-text p-2 hidden md:block font-black"
				>
					<Icon name="mdi:triangle-down" size="8px" />
					contacts
				</div>
				<a
					href="mailto:singhdharmvir81@gmail.com"
					class="flex px-4 py-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-200 font-semibold"
				>
					<Icon name="mdi:email" class="pr-2" size="24px" />
					<p class="hidden md:block">me@letsbug.in</p>
				</a>
				<a
					href="tel:+917559410568"
					class="flex px-4 py-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-200 font-semibold"
				>
					<Icon name="mdi:phone" class="pr-2" size="24px" />
					<p class="hidden md:block">+917559410568</p>
				</a>
				<div
					class="border-y-4 border-light-border dark:border-dark-border p-2 text-light-text dark:text-dark-text hidden md:block font-black"
				>
					<Icon name="mdi:triangle-down" size="8px" />
					find-me-also-in
				</div>
				<div
					class="w-full border-b-4 border-light-border dark:border-dark-border md:hidden"
				></div>
				<ul class="py-2">
					<li
						class="py-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-all duration-200"
						v-for="l in externalLinks"
						:key="l.name"
					>
						<a :href="l.to" target="_blank" class="px-4 py-2 flex items-center font-semibold">
							<Icon :name="l.icon" size="20px" />
							<span class="px-2 hidden md:inline-block">
								{{ l.name }}
							</span>
						</a>
					</li>
				</ul>
			</section>
		</section>
		<section class="flex-1 flex overflow-hidden">
			<section class="w-1/2 border-r-4 border-light-border dark:border-dark-border hidden md:block">
				<CodeEditor
					:tabs="codeTabs"
					:show-line-numbers="true"
					language="javascript"
				/>
			</section>
			<section class="w-full md:w-1/2">
				<ul class="border-b-4 border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface transition-colors duration-300">
					<li class="border-r-4 border-light-border dark:border-dark-border w-fit p-2 px-4 font-black text-light-text dark:text-dark-text">
						<Icon name="mdi:internet" size="18px" />
						preview
						<Icon name="mdi:close" size="18px" />
					</li>
				</ul>
				<section class="h-full flex">
					<article class="flex-1 md:p-4 flex justify-center">
						<form
							class="bg-light-card dark:bg-dark-card mt-4 w-fit p-4 md:p-8 border-4 border-light-border dark:border-dark-border shadow-brutal-lg h-fit transition-colors duration-300"
							@submit.prevent="formSubmitted"
						>
							<h3 class="text-lg mb-4 text-light-text dark:text-dark-text font-black">
								Your Feedback Matters
							</h3>
							<div class="text-light-text dark:text-dark-text my-2">
								<label class="block mb-1 font-bold">_name:</label>
								<input
									class="bg-light-bg dark:bg-dark-bg border-4 border-light-border dark:border-dark-border px-4 py-2 transition-all duration-200 focus:border-light-accent dark:focus:border-dark-accent focus:outline-none font-mono"
									type="text"
									v-model="name"
									required
								/>
							</div>

							<div class="text-light-text dark:text-dark-text my-2">
								<label class="block mb-1 font-bold">_email:</label>
								<input
									class="bg-light-bg dark:bg-dark-bg border-4 border-light-border dark:border-dark-border px-4 py-2 transition-all duration-200 focus:border-light-accent dark:focus:border-dark-accent focus:outline-none font-mono"
									type="email"
									v-model="email"
									required
								/>
							</div>

							<div class="text-light-text dark:text-dark-text my-2">
								<label class="block mb-1 font-bold">_message:</label>
								<textarea
									class="bg-light-bg dark:bg-dark-bg border-4 border-light-border dark:border-dark-border px-4 py-2 w-full transition-all duration-200 focus:border-light-accent dark:focus:border-dark-accent focus:outline-none resize-none font-mono"
									rows="5"
									v-model="message"
									required
								></textarea>
							</div>

							<button
								:disabled="loading"
								type="submit"
								class="px-6 mt-4 py-3 bg-light-accent dark:bg-dark-accent text-light-bg dark:text-dark-bg border-4 border-light-border dark:border-dark-border shadow-brutal hover:shadow-brutal-lg inline-flex items-center font-black transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal disabled:opacity-50"
								:class="loading && 'hover:cursor-not-allowed'"
							>
								<svg
									v-if="loading"
									aria-hidden="true"
									role="status"
									class="inline w-4 h-4 mr-3 text-white animate-spin"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="#E5E7EB"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentColor"
									/>
								</svg>
								<span v-if="!loading">submit</span>
								<span v-if="loading">submitting</span>
							</button>
						</form>
					</article>
					<div
						class="w-4 border-l-4 border-light-border dark:border-dark-border flex justify-center py-2"
					>
						<div class="bg-light-border dark:bg-dark-border w-3 h-2"></div>
					</div>
				</section>
			</section>
		</section>
	</section>
	<div
		id="toast-simple"
		class="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 space-x-4 text-light-text dark:text-dark-text bg-light-card dark:bg-dark-card border-4 border-light-border dark:border-dark-border shadow-brutal-lg z-50"
		role="alert"
		v-if="toast"
	>
		<svg
			class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 18 20"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
			/>
		</svg>
		<div class="pl-4 text-sm font-normal">{{ toastMessage }}</div>
	</div>
</template>
<script>
export default {
	head() {
		return {
			title: "Contact Aniket Singh - Software Engineer | Hire, Connect, Collaborate",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Contact Aniket Singh - Software Engineer at DSHGSonic. Available for opportunities, collaborations, and hiring. Email: singhdharmvir81@gmail.com | Phone: +917559410568",
				},
				{
					name: "keywords",
					content: "Contact Aniket Singh, Hire Aniket Singh, Aniket Singh Email, Aniket Singh Phone, Software Engineer Contact, Hire Developer, Freelance Developer, DSHGSonic"
				},
				{
					property: "og:title",
					content: "Contact Aniket Singh - Software Engineer | Hire & Connect"
				},
				{
					property: "og:description",
					content: "Contact Aniket Singh - Software Engineer at DSHGSonic. Available for opportunities and collaborations."
				},
				{
					property: "og:url",
					content: "https://aniket.letsbug.in/contact"
				},
				{
					rel: "canonical",
					href: "https://aniket.letsbug.in/contact"
				}
			],
		}
	},
	data() {
		return {
			codeTabs: [
				{
					id: 'contact-form',
					filename: 'contactForm.js',
					language: 'javascript',
					code: `const button = document.querySelector('#sendBtn');

const message = {
  name: "",
  email: "",
  message: "",
  date: new Date()
}

button.addEventListener('click', () => {
  form.send(message);
})`
				}
			],
			externalLinks: [
				{
					name: "YouTube Channel",
					to: "https://www.youtube.com/@_letsBug",
					icon: "basil:youtube-solid",
				},
				{
					name: "HackerRank",
					to: "https://www.hackerrank.com/profile/singhdharmvir81",
					icon: "cib:hackerrank",
				},
				{
					name: "LeetCode",
					to: "https://leetcode.com/Aniket-git-hub/",
					icon: "simple-icons:leetcode",
				},
			],
			name: "",
			email: "",
			message: "",
			loading: false,
			toast: false,
			toastMessage: "",
		}
	},
	methods: {
		async formSubmitted(e) {
			try {
				if (
					this.name.trim() != "" &&
					this.email.trim() != "" &&
					this.message.trim() != ""
				) {
					let template = `
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; color: #333; border: 1px solid #b8b8b8; border-radius:.3rem;">
        <h2 style="font-size: 24px; margin-bottom: 20px;">📬 New Feedback Received 📬</h2>
        
        <p style="font-size: 18px;">Hello Admin,</p>

        <p style="font-size: 18px;">You've received new feedback from a user. Here are the details:</p>

        <p style="font-size: 18px;"><strong>Name:</strong> ${this.name}</p>
        <p style="font-size: 18px;"><strong>Email:</strong> ${this.email}</p>
        <p style="font-size: 18px;"><strong>Message:</strong> ${this.message}</p>

        <p style="font-size: 18px;">Please review the feedback and take appropriate action.</p>

        <p style="font-size: 18px;">Best Regards,</p>
        <p style="font-size: 18px;">letsbug.in</p>
    </div>
`
					this.loading = true
					await fetch(
						"https://emailer-esi7.onrender.com/send-email",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								to: "singhdharmvir81@gmail.com",
								subject: "New feedback from " + this.name,
								text: template,
							}),
						},
					)
					this.toast = true
					this.toastMessage = "Feedback sent!"
				}
			} catch (error) {
				this.toast = true
				this.toastMessage = "Something went wrong!"
				console.log(error)
			} finally {
				this.loading = false
				this.name = ""
				this.email = ""
				this.message = ""

				setTimeout(() => {
					this.toast = false
					this.toastMessage = ""
				}, 3000)
			}
		},
	},
}
</script>
