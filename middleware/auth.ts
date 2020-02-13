import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ store, redirect }) => {
  if (!store.state.auth.loggedIn) {
    redirect('/')
  }
}

export default middleware
