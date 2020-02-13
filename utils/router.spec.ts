// @ts-nocheck
import {
  getPathWithoutParams,
  getLocalizedPath,
  getLocalizedRoutes,
} from '@/utils/router'

describe('router utils', () => {
  it('getPathWithoutParams', () => {
    const path = '/company/:companySlug-:companyId(\\d{4,30})?(-b)'

    expect(getPathWithoutParams(path)).toEqual('/company')
  })

  it('getLocalizedPath', () => {
    const path = '/company/:companySlug-:companyId(\\d{4,30})?(-b)'
    const translations = { routes: { '/company': '/firma' } }

    expect(getLocalizedPath(path, translations)).toEqual('/firma/:companySlug-:companyId(\\d{4,30})?(-b)')
  })

  describe('getLocalizedRoutes', () => {
    const routes = [{ name: 'index', path: '/' }]

    it('for default locale', () => {
      const config = {
        i18n: {
          defaultLocale: 'cs',
          locales: [
            {
              code: 'cs',
              name: 'Česky',
              domain: 'placestoreshop.cz',
            },
          ],
        },
      }

      expect(getLocalizedRoutes(routes, config)).toEqual(routes)
    })

    it('for not default locale', () => {
      const localizedRoutes = [{ name: 'index', path: '/' }, { name: 'index-sk', path: '/' }]
      const config = {
        i18n: {
          defaultLocale: 'cs',
          locales: [
            {
              code: 'cs',
              name: 'Česky',
              domain: 'local.placestoreshop.cz',
            },
            {
              code: 'sk',
              name: 'Slovensky',
              domain: 'local.placestoreshop.sk',
            },
          ],
        },
      }

      expect(getLocalizedRoutes(routes, config)).toEqual(localizedRoutes)
    })
  })
})
