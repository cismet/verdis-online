import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/store';
import App from './App';

import './index.css';
import ErrorBoundary from './ErrorBoundary';

const target = document.querySelector('#root');

render(
	<ErrorBoundary>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<App />
				</div>
			</ConnectedRouter>
		</Provider>
	</ErrorBoundary>,
	target
);
