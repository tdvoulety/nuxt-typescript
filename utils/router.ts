// @ts-nocheck
import { parse } from 'path-to-regexp'

export const getPathWithoutParams = (path) => {
  try {
    const parsed = parse(path)

    return parsed[0] || ''
  } catch (e) {
    console.error(e)

    return ''
  }
}

export const getLocalizedPath = (path, { routes = {} }) => {
  const pathWithoutParams = getPathWithoutParams(path)
  const localizedPath = routes[pathWithoutParams]

  return localizedPath ? path.replace(pathWithoutParams, localizedPath) : path
}

export const getLocalizedRoutes = (routes = [], { i18n: { defaultLocale, locales = [] } = {} }) => {
  const newRoutes = [...routes]

  try {
    locales.forEach((locale) => {
      if (locale.code !== defaultLocale) {
        /* eslint-disable import/no-dynamic-require, global-require */
        const translations = require(`../locales/${locale.code}.json`)

        routes.forEach((route) => {
          const localizedPath = getLocalizedPath(route.path, translations)

          if (localizedPath) {
            newRoutes.push({
              ...route,
              name: `${route.name}-${locale.code}`,
              path: `${localizedPath}`,
            })
          }
        })
      }
    })

    return newRoutes
  } catch (e) {
    console.error(e)

    return newRoutes
  }
}
