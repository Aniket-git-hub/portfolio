export const useTheme = () => {
  const theme = useState<'light' | 'dark'>('theme', () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
      return savedTheme || 'light'
    }
    return 'light'
  })
  
  const updateThemeClass = (themeValue: 'light' | 'dark') => {
    if (process.client) {
      const html = document.documentElement
      html.classList.remove('light', 'dark')
      html.classList.add(themeValue)
    }
  }
  
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    if (process.client) {
      localStorage.setItem('theme', theme.value)
      updateThemeClass(theme.value)
    }
  }
  
  const setTheme = (newTheme: 'light' | 'dark') => {
    theme.value = newTheme
    if (process.client) {
      localStorage.setItem('theme', newTheme)
      updateThemeClass(newTheme)
    }
  }
  
  if (process.client) {
    watch(theme, (newTheme) => {
      updateThemeClass(newTheme)
    }, { immediate: true })
  }
  
  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme
  }
}
