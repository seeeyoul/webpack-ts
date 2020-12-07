import React from 'react';
import { Switch } from 'react-router-dom';
import renderRoutes from './components/router';
import { routes } from './routes';
import 'antd/dist/antd.css';

const authed = false;
const authPath = '/login';

const App = () => {
	return (
			<Switch>
				{
					renderRoutes(routes, authed, authPath)
				}
			</Switch>
	)
}

export default App;
