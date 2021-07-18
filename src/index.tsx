import 'loaders.css/loaders.min.css';
import { Store } from 'redux';

const importStore = process.env.TEST_BUILD 
  ? import('./app/test-store')
  : import('./app/store');

importStore
  .then(({ default: store }) => import('./app')
    .then(({ default: app }) => app(store as Store)));
