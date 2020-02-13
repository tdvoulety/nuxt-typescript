import { Plugin } from '@nuxt/types'

// @ts-ignore
const plugin: Plugin = ({ $axios, store, app }) => {
  $axios.onRequest((config) => {
    /* eslint-disable no-param-reassign */
    const { config: { baseUrl }, base } = store.state

    if (!config.data) {
      config.data = null
    }

    config.headers.common['Content-Type'] = 'application/json'
    // eslint-disable-next-line dot-notation
    config.headers.common['Accept'] = 'application/json'
    config.baseURL = baseUrl
    /* eslint-enable */
  })

  $axios.onError((error) => {
    console.error(error)
  })
}

export default plugin
