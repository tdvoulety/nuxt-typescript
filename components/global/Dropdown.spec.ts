// @ts-nocheck
import { mountComponent, rendersToSnapshot } from '~/test/unit/helpers'
import Dropdown from '@/components/global/Dropdown'
import { GLOBAL_CLICK_EVENT } from '@/constants/global'

const items = [
  {
    value: 'de',
    text: 'Deutsch',
  },
  {
    value: 'en',
    text: 'English',
  },
  {
    value: 'fr',
    text: 'Français',
  },
]

const mount = (props = {}) => mountComponent(Dropdown, {
  propsData: {
    text: 'text',
    items,
    onClick: jest.fn(),
    ...props,
  },
  stubs: ['router-link'],
})

describe('Dropdown', () => {
  it('shows all items as list items', () => {
    const { wrapper } = mount()

    expect(wrapper.findAll('.dropdown__item').length).toEqual(3)
  })

  it('shows dropdown menu after click on button and hide it after another click on button', async () => {
    const { wrapper } = mount()
    const clickEventOnToggle = { target: { id: wrapper.vm.dropdownId }, stopPropagation: jest.fn() }
    const dropdownMenu = wrapper.find('.dropdown__menu')

    wrapper.vm.$root.$emit(GLOBAL_CLICK_EVENT, clickEventOnToggle)
    await wrapper.vm.$nextTick()
    expect(dropdownMenu.classes('show')).toBe(true)
    wrapper.vm.$root.$emit(GLOBAL_CLICK_EVENT, clickEventOnToggle)
    await wrapper.vm.$nextTick()
    expect(dropdownMenu.classes('show')).toBe(false)
  })

  it('shows dropdown menu after click on button and hide it after click on any element on the page', async () => {
    const { wrapper } = mount()
    const clickEventOnToggle = { target: { id: wrapper.vm.dropdownId }, stopPropagation: jest.fn() }
    const dropdownMenu = wrapper.find('.dropdown__menu')

    wrapper.vm.$root.$emit(GLOBAL_CLICK_EVENT, clickEventOnToggle)
    await wrapper.vm.$nextTick()
    expect(dropdownMenu.classes('show')).toBe(true)
    wrapper.vm.$root.$emit(GLOBAL_CLICK_EVENT)
    await wrapper.vm.$nextTick()
    expect(dropdownMenu.classes('show')).toBe(false)
  })

  it('dropdown has disabled class if prop disabled is true', () => {
    const { wrapper } = mount({ disabled: true })
    const dropdown = wrapper.find('.dropdown')

    expect(dropdown.classes('disabled')).toBe(true)
  })

  it('emit onClick event after click on the item', () => {
    const { wrapper } = mount()

    wrapper.find('.dropdown__item').trigger('click')
    expect(wrapper.emitted().onClick).toBeTruthy()
  })

  it('renders to a snapshot', () => {
    const { wrapper } = mount()

    rendersToSnapshot(wrapper)
  })
})
