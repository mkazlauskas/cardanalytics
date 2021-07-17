import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Root from './components';

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Root />
      {[].map(() => <span />)}
    </Provider>
  );
};

export default App;
