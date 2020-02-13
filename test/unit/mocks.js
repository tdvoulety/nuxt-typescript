import config from '@/config/env'

export default {
  $t: (key) => `#${key}#`,
  $router: {
    push: jest.fn(),
    replace: jest.fn(),
  },
  $route: {
    path: '/',
    fullPath: '/',
    name: 'home',
    query: {},
  },
  $store: {
    config,
    i18n: {
      locale: 'cs',
    },
    dispatch: jest.fn().mockReturnValue(Promise.resolve()),
    commit: jest.fn(),
  },
  $i18n: {
    locale: 'cs',
  },
}
