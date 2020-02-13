// @ts-nocheck
import { state, actions, mutations } from '@/store/index'
import { ACTIONS, MUTATIONS } from '@/constants/store'
import { getMockAction } from '~/test/unit/helpers'

let commit
let dispatch
let localState
let mockAction

describe('index store', () => {
  beforeEach(() => {
    commit = jest.fn()
    dispatch = jest.fn().mockReturnValue(Promise.resolve())
    localState = state()
    mockAction = getMockAction({
      commit,
      dispatch,
      state: state(),
      bind: {
        $cookies: { getAll: jest.fn() },
      },
    })
  })

  it(ACTIONS.NUXT_SERVER_INIT, async (done) => {
    const action = actions[ACTIONS.NUXT_SERVER_INIT]
    const payload = {
      req: {
        headers: {
          host: 'localhost:3000',
        },
      },
      route: {
        name: 'hode',
        path: '/',
      },
    }

    await mockAction({ action, payload })
    expect(commit).toHaveBeenCalledTimes(1)
    done()
  })

  it(MUTATIONS.SET_BASE, () => {
    const set = mutations[MUTATIONS.SET_BASE]

    set(localState, 'https://localhost:3000')
    expect(localState.base).toEqual('https://localhost:3000')

    set(localState)
    expect(localState.base).toEqual(null)
  })

  it(MUTATIONS.SET_SIDE_NAV_VISIBILITY, () => {
    const set = mutations[MUTATIONS.SET_SIDE_NAV_VISIBILITY]

    set(localState, true)
    expect(localState.sideNavVisible).toBe(true)

    set(localState)
    expect(localState.sideNavVisible).toBe(false)
  })
})
