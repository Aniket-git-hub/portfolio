/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'border-color': '#314862',
        'bg-color': '#000d1d',
        'editor-bg': '#011627',
        'editor-text-color': '#999f9b',
        'bg-hover-color': '#1d4e77',
        'quote-text-color': '#d79488',
        'editor-green': '#43d9ac',
        'editor-blue': '#032fae',
        'card-bg': '#0d213f',
        'card-btn': '#0f315b',
      }
    },
  },
  plugins: [],
}

