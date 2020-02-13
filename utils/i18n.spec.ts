// @ts-nocheck
import { getLocaleFromDomain } from '@/utils/i18n'

describe('i18n utils', () => {
  it('getLocaleFromDomain', () => {
    const domain = 'test.com'
    const defaultLocale = 'en'
    const locales = [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'de',
        name: 'German',
      },
    ]

    expect(getLocaleFromDomain(domain, { defaultLocale, locales })).toEqual('en')
  })
})
