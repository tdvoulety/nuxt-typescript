/**
 Docs: https://github.com/marcuswestin/store.js

 Usage in the app:
 // Store current user
 this.$localStorage.set('user', { name:'Marcus' }

 // Get current user
 this.$localStorage.get('user')

 // Remove current user
 this.$localStorage.remove('user')

 // Clear all keys
 this.$localStorage.clearAll()
* */
import { Plugin } from '@nuxt/types'
// @ts-ignore
import myLocalStorage from 'store'
// @ts-ignore
import expirePlugin from 'store/plugins/expire'

myLocalStorage.addPlugin(expirePlugin)

declare module '@nuxt/types' {
  interface Context {
    $localStorage(): void
  }
}

const plugin: Plugin = (context, inject) => {
  inject('localStorage', myLocalStorage)
}

export default plugin
