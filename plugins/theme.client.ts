export default defineNuxtPlugin(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.add(savedTheme)
  }
})
