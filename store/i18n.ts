import { MUTATIONS } from '@/constants/store'

export const state = () => ({
  locale: null,
})

export const mutations = {
  // @ts-ignore
  [MUTATIONS.SET_LOCALE](state, payload = null) {
    state.locale = payload
  },
}
