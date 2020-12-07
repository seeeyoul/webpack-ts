/*
 * @Author: morning
 * @Date: 2020-12-07 17:21:16
 * @Last Modified by: morning
 * @Last Modified time: 2020-12-07 19:08:21
 */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const nav = [
	{
		title: '首页',
		to: '/',
	},
	{
		title: '归档',
		to: '/file',
	},
	{
		title: '文章',
		to: '/articleList'
	},
	{
		title: '关于',
		to: '/about'
	}
]


const Nav = () => {
	return (
		<div className='flex'>
			{
				nav.map(item => {
				return <Link className='navs pointer' to={item.to} key={item.to}>{ item.title }</Link>
				})
			}
		</div>
	)
}

export default withRouter(Nav);

