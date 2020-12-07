import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './assets/styles/index.scss';
import store from './store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = () => (
	<HashRouter basename='/'>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
)

ReactDOM.render(
	<Root />,
	document.querySelector('#root')
);
