import config from '@/config/env'
import { ACTIONS, MUTATIONS } from '@/constants/store'

export const state = () => ({
  config,
  base: null,
  sideNavVisible: false,
})

export const actions = {
  // @ts-ignore
  async [ACTIONS.NUXT_SERVER_INIT]({ commit }, { req }) {
    const headers = req && req.headers
    const domain = headers && (headers['x-forwarded-host'] || headers.host)

    commit(MUTATIONS.SET_BASE, `https://${domain}`)

    return Promise.resolve()
  },
}

export const mutations = {
  // @ts-ignore
  [MUTATIONS.SET_BASE](state, payload = null) {
    state.base = payload
  },
  // @ts-ignore
  [MUTATIONS.SET_SIDE_NAV_VISIBILITY](state, payload = false) {
    state.sideNavVisible = payload
  },
}
