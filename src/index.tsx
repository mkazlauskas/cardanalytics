// Display preloader animation as soon as possible.
// Load the app asynchronously.

import 'loaders.css/loaders.min.css';
import { Store } from 'redux';

// Use mock data for e2e tests
const importStore = process.env.TEST_BUILD 
  ? import('./app/store.mockdata')
  : import('./app/store');

// Load the app
importStore
  .then(({ default: store }) => import('./app')
    .then(({ default: app }) => app(store as Store)));
