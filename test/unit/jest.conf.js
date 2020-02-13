const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleDirectories: [
    'node_modules',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ico|ttf|woff|woff2)$': '<rootDir>/node_modules/jest-transform-stub',
    '^.+\\.(jsx?|tsx?)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(jsx?|tsx?)$',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  setupFilesAfterEnv: ['<rootDir>/test/unit/setupEnv'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'store/**/*.{js,ts}',
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.{js,ts,vue}',
    'pages/**/*.{js,ts,vue}',
    'services/**/*.{js,ts}',
    'utils/**/*.{js,ts}',
    '!**/node_modules/**',
  ],
  globals: {
    $nuxt: true,
  },
}
