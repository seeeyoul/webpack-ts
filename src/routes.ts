/*
 * @Author: morning
 * @Date: 2020-12-06 10:59:26
 * @Last Modified by: morning
 * @Last Modified time: 2020-12-07 10:27:56
 */
import Home from './pages/home';
import ArticleList from './pages/articleList';
import NotFound from './pages/notFound';


export const routes = [
	{
			path: '/',
			exact: true,
			component: Home,
			requireAuth: false,
	},
	{
			path: '/articleList',
			component: ArticleList,
			requireAuth: false,
	},
	{
			path: '*',
			component: NotFound,
			requireAuth: false,
	}
]