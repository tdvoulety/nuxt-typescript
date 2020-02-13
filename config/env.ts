export default {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
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
