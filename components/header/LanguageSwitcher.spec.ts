// @ts-nocheck
import LanguageSwitcher from '@/components/header/LanguageSwitcher'
import Dropdown from '@/components/global/Dropdown'
import { mountComponent, rendersToSnapshot } from '~/test/unit/helpers'

const mount = ({ mocks = {} } = {}) => mountComponent(LanguageSwitcher, {
  state: {
    config: {
      i18n: {
        defaultLocale: 'cs',
        locales: [
          {
            code: 'cs',
            name: 'Česky',
            domain: 'placestoreshop.cz',
          },
          {
            code: 'sk',
            name: 'Slovensky',
            domain: 'placestoreshop.sk',
          },
        ],
      },
    },
  },
  stubs: {
    Dropdown,
  },
  mocks,
})

describe('LanguageSwitcher', () => {
  it('render selected locale if locale is selected', () => {
    const locale = {
      code: 'cs',
      name: 'Česky',
      domain: 'placestoreshop.cz',
    }
    const { wrapper } = mount({ mocks: { $i18n: { locale: locale.code } } })

    expect(wrapper.findAll('.language-switcher').length).toEqual(1)
    expect(wrapper.findAll('.language-switcher__current').length).toEqual(1)
    expect(wrapper.vm.selectedLocale).toEqual(locale)
    expect(wrapper.find('.language-switcher__current span').text()).toBe(locale.name)
  })

  it('don\'t render selected locale if locale is not selected', () => {
    const { wrapper } = mount({ mocks: { $i18n: { locale: null } } })

    expect(wrapper.findAll('.language-switcher').length).toEqual(1)
    expect(wrapper.findAll('.language-switcher__current').length).toEqual(0)
  })

  it('renders to a snapshot', () => {
    const { wrapper } = mount()

    rendersToSnapshot(wrapper)
  })
})
