import { defineStore } from 'pinia'

export const userPreferences = defineStore({
  id: 'userPreferences',
  state: () => {
    const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    return {
      theme
    }
  },
  actions: {
    switchToDark() {
      this.$patch({theme: 'dark'})
    },
    switchToLight() {
      this.$patch({theme: 'light'})
    },
    switch() {
      if (this.theme === 'light'){
        this.$patch({theme: 'dark'})
        localStorage.setItem('theme','dark')
      } else {
        this.$patch({theme: 'light'})
        localStorage.setItem('theme','light')
      }
    }
  }
})