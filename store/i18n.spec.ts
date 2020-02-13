// @ts-nocheck
import { state, mutations } from '@/store/i18n'
import { MUTATIONS } from '@/constants/store'

let localState

describe('i18n store', () => {
  beforeEach(() => {
    localState = state()
  })

  it(MUTATIONS.SET_LOCALE, () => {
    const set = mutations[MUTATIONS.SET_LOCALE]

    set(localState, 'de')
    expect(localState.locale).toEqual('de')

    set(localState)
    expect(localState.locale).toEqual(null)
  })
})
