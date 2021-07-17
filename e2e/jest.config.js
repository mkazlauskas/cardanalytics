const {defaults} = require('jest-config');
module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    SERVER_URL: 'http://localhost:3000',
    JEST_TIMEOUT: 50000
  },
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testRegex: './*\\.(test)|(steps)\\.tsx?$'
}
console.log('RUNNING E2E INTEGRATION TESTS - MAKE SURE PORT 3000 IS NOT IN USAGE')