// jest-puppeteer.config.js
module.exports = {
	launch: {
		args: ['--lang=en-US'],
	},
  server: {
    command: `npm run start:test`,
    port: 3000,
    launchTimeout: 20000,
    debug: true,
  },
}
