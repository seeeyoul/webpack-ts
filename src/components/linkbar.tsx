/*
 * @Author: morning
 * @Date: 2020-12-07 17:21:12
 * @Last Modified by: morning
 * @Last Modified time: 2020-12-07 18:03:36
 */
import React from 'react';
import { Tooltip } from 'antd';
import { WeiboCircleOutlined, GithubOutlined, QqOutlined, WechatOutlined, SmileOutlined } from '@ant-design/icons';
import './index.scss';

const links = [
	{
		title: 'morning_live',
		icon: WechatOutlined
	},
	{
		title: '1364661512',
		icon: QqOutlined
	},
	{
		title: 'https://github.com/seeeyoul',
		icon: GithubOutlined
	},
	{
		title: '你猜',
		icon: WeiboCircleOutlined
	},
	{
		title: '今天也要开心哦',
		icon: SmileOutlined
	},
]

const LinkBar = () => {
	return (
		<div className='flex'>
			{
				links.map(item => {
					return (
						<Tooltip className='icons pointer' title={item.title} key={item.title} >
							<item.icon />
						</Tooltip>
					)
				})
			}
		</div>
	)
}

export default LinkBar;