import { Middleware } from '@nuxt/types'
import { MUTATIONS, NAMESPACES } from '~/constants/store'
import { getLocaleFromDomain } from '~/utils/i18n'

const middleware: Middleware = ({ store, isHMR, req }) => {
  // ignore, if called from hot module reload
  if (isHMR) {
    return
  }

  const { config: { i18n = {} } = {} } = store.state
  const { headers: { host = '' } = {} } = req
  const locale = getLocaleFromDomain(host, i18n)

  store.commit(NAMESPACES.I18N + MUTATIONS.SET_LOCALE, locale)
}

export default middleware
