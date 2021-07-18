
import { levels, setLevel } from 'loglevel';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Components from './components';
import store from './redux/store';

setLevel(process.env.NODE_ENV === 'production' ? levels.INFO : levels.DEBUG);

const app = <Provider store={store}><Components /></Provider>;

ReactDOM.render(app, document.getElementById('root'));

// Simulating load time. TODO: Move this to an epic
setTimeout(() => {
	document.getElementById('preloader')?.remove();
}, 1000);