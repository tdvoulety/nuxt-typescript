// @ts-nocheck
import Header from '@/components/header/Header'
import { MUTATIONS } from '@/constants/store'
import { mountComponent, rendersToSnapshot } from '~/test/unit/helpers'

const mount = () => mountComponent(Header, {
  state: {
    sideNavVisible: false,
    auth: {
      user: null,
    },
  },
})

describe('Header', () => {
  it('render', () => {
    const { wrapper } = mount()

    expect(wrapper.findAll('.app-header').length).toEqual(1)
    expect(wrapper.findAll('.app-header__navbar-toggler').length).toEqual(1)
    expect(wrapper.findAll('.app-header__logo').length).toEqual(1)
    expect(wrapper.find('.app-header').classes()).not.toContain('app-header--server-error')
  })

  it('commit side navbar mutation after click on toggle button', () => {
    const { wrapper, store } = mount()
    const toggle = wrapper.find('.app-header__navbar-toggler').element

    toggle.click()
    expect(store.commit).toHaveBeenCalledTimes(1)
    expect(store.commit).toHaveBeenCalledWith(MUTATIONS.SET_SIDE_NAV_VISIBILITY, true)
  })

  it('renders to a snapshot', () => {
    const { wrapper } = mount()

    rendersToSnapshot(wrapper)
  })
})
