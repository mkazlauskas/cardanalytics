// jest-puppeteer.config.js
module.exports = {
  server: {
    command: `yarn start --no-watch`,
    port: 3000,
    launchTimeout: 20000,
    debug: true,
  },
}
