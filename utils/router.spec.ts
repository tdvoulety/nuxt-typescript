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

    it('for locale', () => {
      const localizedRoutes = [{ name: 'index', path: '/' }, { name: 'index-de', path: '/' }]
      const config = {
        i18n: {
          defaultLocale: 'en',
          locales: [
            {
              code: 'en',
              name: 'English',
            },
            {
              code: 'de',
              name: 'German',
            },
          ],
        },
      }

      expect(getLocalizedRoutes(routes, config)).toEqual(localizedRoutes)
    })
  })
})
