
import { createTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { levels, setLevel } from 'loglevel';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import Components from '../components';

setLevel(process.env.NODE_ENV === 'production' ? levels.INFO : levels.DEBUG);

const theme = createTheme({ palette:{ background: { default: grey[200] } } });

export default (store: Store) => {
  const app = (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Components />
      </MuiThemeProvider>
    </Provider>
  );

  ReactDOM.render(app, document.getElementById('root'));
};