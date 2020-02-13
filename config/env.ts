export default {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
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
