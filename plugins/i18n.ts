/**
 * Docs:
 * https://kazupon.github.io/vue-i18n/started.html#html
 * https://visablelabs.atlassian.net/wiki/spaces/CP/pages/619479041/Localization
*/
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { Plugin } from '@nuxt/types'
import { NAMESPACES, MUTATIONS } from '@/constants/store'

Vue.use(VueI18n)

const plugin: Plugin = ({ store, app }) => {
  const { i18n: { locales, defaultLocale } } = store.state.config
  const messages = {}

  if (locales) {
    locales.forEach((item: { code: string }) => {
      /* eslint-disable global-require,import/no-dynamic-require */
      // @ts-ignore
      messages[item.code] = require(`~/locales/${item.code}.json`)
      /* eslint-enable global-require,import/no-dynamic-require */
    })
  }

  // eslint-disable-next-line no-param-reassign
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: defaultLocale,
    silentTranslationWarn: true,
    messages,
  })

  store.subscribe((mutation) => {
    if (mutation.type === NAMESPACES.I18N + MUTATIONS.SET_LOCALE) {
      /* eslint-disable no-param-reassign */
      // @ts-ignore
      app.i18n.locale = mutation.payload
      /* eslint-enable no-param-reassign */
    }
  })
}

export default plugin
