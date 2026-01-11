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
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Theme (Neo-Brutalism)
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        'dark-card': '#252525',
        'dark-border': '#000000',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#a0a0a0',
        'dark-accent': '#00ff88',
        'dark-accent-2': '#ff0080',
        'dark-accent-3': '#0080ff',
        'dark-hover': '#2a2a2a',
        
        // Light Theme (Neo-Brutalism)
        'light-bg': '#ffffff',
        'light-surface': '#f5f5f5',
        'light-card': '#ffffff',
        'light-border': '#000000',
        'light-text': '#000000',
        'light-text-secondary': '#666666',
        'light-accent': '#00ff88',
        'light-accent-2': '#ff0080',
        'light-accent-3': '#0080ff',
        'light-hover': '#f0f0f0',
        
        // Legacy colors for backward compatibility (will be replaced)
        'border-color': '#000000',
        'bg-color': '#ffffff',
        'editor-bg': '#ffffff',
        'editor-text-color': '#000000',
        'bg-hover-color': '#f0f0f0',
        'quote-text-color': '#ff0080',
        'editor-green': '#00ff88',
        'editor-blue': '#0080ff',
        'card-bg': '#ffffff',
        'card-btn': '#000000',
        'code-pink': '#ff0080',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal-inset': 'inset 4px 4px 0px 0px #000000',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'bounce-brutal': 'bounceBrutal 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceBrutal: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '4px 4px 0px 0px #000000',
            borderColor: '#000000'
          },
          '100%': { 
            boxShadow: '4px 4px 0px 0px #00ff88, 0 0 20px rgba(0, 255, 136, 0.5)',
            borderColor: '#00ff88'
          },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}

