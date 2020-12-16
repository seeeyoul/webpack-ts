# 使用ts + webpack + react构建的网页

只写了一部分...🤔🤔

## 路由组件的封装：
```
  
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

interface RouteItem {
	key?: number | string,
	path: string,
	exact?: boolean,
	strict?: boolean,
	requireAuth: boolean,
	component: any
}

const renderRoutes = (routes: RouteItem[], authed: boolean, authPath = '/login', extraProps = {}, switchProps = {}) =>
	routes ? (
		<Switch {...switchProps}>
			{
				routes.map((route: RouteItem, i: number): React.ReactElement<any> => (
					<Route
						key={ route.key || i }
						path={ route.path }
						exact={route.exact}
						strict={route.strict}
						render={
							props => {
								if(!route.requireAuth || authed || route.path === authPath) {
									return <route.component {...props} {...extraProps} route={route}  />
								}
								return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
							}
						}
					/>
				))
			}
		</Switch>
	) : null;

export default renderRoutes;
```
