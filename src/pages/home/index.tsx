/*
 * @Author: morning
 * @Date: 2020-12-06 15:38:22
 * @Last Modified by: morning
 * @Last Modified time: 2020-12-07 23:42:05
 */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import Nav from '../../components/nav';
import LinkBar from '../../components/linkbar';
import Banner from './banner';
import HotList from './hotList';
import RightBar from '../../components/rightBar';
import './index.scss';


const Home = () => {
	return (
		<div>
			<Header />
			<div className='flex center_column navBar around'>
				<LinkBar/>
				<Nav />
			</div>
			<Banner />
			<div className='flex'>
				<HotList />
				<RightBar/>
			</div>
		</div>
	)

}

export default connect()(Home);