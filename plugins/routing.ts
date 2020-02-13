import { Plugin } from '@nuxt/types'
import { MUTATIONS } from '@/constants/store'

const plugin: Plugin = ({ store, app }) => {
  if (process.browser) {
    if (app.router) {
      app.router.afterEach((to, from) => {
        if (from.path !== to.path) {
          store.commit(MUTATIONS.SET_SIDE_NAV_VISIBILITY, false)
        }
      })
    }
  }
}

export default plugin
