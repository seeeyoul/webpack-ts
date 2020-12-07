/*
 * @Author: morning
 * @Date: 2020-12-07 23:23:03
 * @Last Modified by: morning
 * @Last Modified time: 2020-12-07 23:34:54
 */
import React from 'react';
import{ Avatar, Divider } from 'antd';
import './index.scss';

const RightBar = () => {
	return (
		<div>
			<Divider>ABOUTE ME</Divider>
			<Avatar src='http://cdn.sellardoor.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200606102302.jpg' className='rightBar_avatar' />
		</div>
	)
}

export default RightBar;