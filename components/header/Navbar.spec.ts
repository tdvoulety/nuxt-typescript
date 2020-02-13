// @ts-nocheck
import NavBar from '@/components/header/NavBar'
import { mountComponent, rendersToSnapshot } from '~/test/unit/helpers'

const mount = (user = null) => mountComponent(NavBar, {
  propsData: {
    sideNavVisible: false,
    user,
  },
})

describe('NavBar', () => {
  it('emit toggleSideNav event after click on side navbar backdrop', () => {
    const { wrapper } = mount()
    const backdrop = wrapper.find('.side-navbar__backdrop').element

    backdrop.click()
    expect(wrapper.emitted().toggleSideNav).toBeTruthy()
  })

  it('renders to a snapshot', () => {
    const { wrapper } = mount()

    rendersToSnapshot(wrapper)
  })
})
