# cardanalytics

Cardano blockchain analytics dashboard, powered by [cardano-graphql](https://github.com/input-output-hk/cardano-graphql).

## Code structure

- Acceptance tests are located at:
  - `e2e/features/*.feature`: Cucumber tests in Gherkin
  - `e2e/steps/[feature].steps.js`: Feature step definitions
- Application code is under `src/`:
  - `index.tsx`: Load the app
  - `components/`: React components
    - `[Component]`/
      - `index.jsx`: Component code
      - `index.test.jsx`: Component tests (currently only snapshot verification)
      - `__snapshots__/`: Generated snapshots for tests
    - `index.jsx`/`index.test.jsx`/`__snapshots__/`: Root layout component
  - `app/`:
    - `index.tsx`: Setup react context providers
    - `store.ts`: Redux store initialization
    - `actions.ts`: Redux action creators
    - `reducers/`
      - `index.ts`: Combine and export Redux reducers
      - `[reducer]/`
        - `index.ts`: Reducer function
        - `index.test.ts`: Reducer function tests
    - `epics/`
      - `index.ts`: Combine and export redux-observable epics
      - `types.ts`: Types used by epics
      - `test-helpers.ts`: Helper functions for testing epics
      - `[epic]/`
        - `index.ts`: Epic
        - `index.test.ts`: Epic observable tests
    - `services/`
      - `index.ts`: Combine and export services
      - `load/`: Service that loads Cardano data through GraphQL
        - `graphql-request.mock.ts`: mock GraphQL client for tests
        - `query.graphql`: GraphQL query
      - `[service]/`
        - `index.ts`: Service code
        - `index.test.ts`: Service tests

## Tests

- Acceptance tests using `puppeteer`, `jest` and `jest-cucumber`
- React component snapshot tests using `jest`, `enzyme` and `enzyme-to-json`
- `jest` unit tests for `redux` reducers, `redux-observable` epics and services

## TODOs

- GitHub actions don't need to run tests on PR merge
- Refactor webpack.config.js to use NODE_ENV=test instead of a separate `testBuild` param
- Replace stock CRA images used in manifest.json
- Generate graphql query result type from schema.graphql+query.graphql?
- Use webpack magic to replace `graphql-request` module on test build instead of conditional import() in code
- cardano-graphql server sometimes goes down. Upgrading VPS to 16G will probably resolve it.
