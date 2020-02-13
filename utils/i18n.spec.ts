// @ts-nocheck
import { getLocaleFromDomain } from '@/utils/i18n'

describe('i18n utils', () => {
  it('getLocaleFromDomain', () => {
    const domain = 'placestoreshop.cz'
    const defaultLocale = 'cs'
    const locales = [
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
    ]

    expect(getLocaleFromDomain(domain, { defaultLocale, locales })).toEqual('cs')
  })
})
