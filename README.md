# cardanalytics

Cardano blockchain analytics dashboard

## Tests

- e2e tests using `puppeteer`, `jest` and `jest-cucumber`
- React component snapshot tests using `jest`, `enzyme` and `enzyme-to-json`
- `jest` unit tests for reducers, `redux-observable` epics and services

## TODOs

- GitHub actions don't need to run tests on PR merge
- Refactor webpack.config.js to use NODE_ENV=test instead of a separate `testBuild` param
- Replace stock CRA images used in manifest.json
- Generate graphql query result type from schema.graphql+query.graphql?
