// @ts-nocheck
// eslint-disable-next-line import/prefer-default-export
export const getLocaleFromDomain = (domain = '', { defaultLocale, locales = [] }) => {
  try {
    const adjustedDomain = domain.split(':')[0]
    const item = locales.find((locale) => locale.domain === adjustedDomain)

    return item ? item.code : defaultLocale
  } catch (e) {
    console.error(e)

    return defaultLocale
  }
}
