/*
 * @Author: morning
 * @Date: 2020-12-07 20:17:33
 * @Last Modified by: morning
 * @Last Modified time: 2020-12-07 23:20:54
 */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import marked from 'marked';
import highlight from 'highlight.js';
import { Tag } from 'antd';
import { EyeOutlined, SmileOutlined } from '@ant-design/icons';
import { Article } from '../../utils/types';
import './index.scss';


interface IProps {
	articleList: Article[]
}


const HotList = (props: IProps) => {
	const { articleList } = props;
	const res = [
		{
		_id:'5ed8fd4afda6370be6a11f9c',
		title:'Oauth第三方登录GITHUB的前后端处理',
		info:'常见的鉴权有`cookie`, `session cookie`, `token`, `Oauth`, 由于微信与QQ需要企业认证才能申请, 本文介绍一下`github`的`oauth`是如何操作的.',
		content:'> ## 第三方登录的原理\n\n用户登录A网站, 使用第三方登录, 点击跳转到第三方平台登录, 成功后url携带`code`跳转回来, 后端用`code`向第三方网站发送请求, 获得`token`, 再拿`token`请求第三方网站获得用户相关信息.\n\n> ## 前置操作\n\ngithub网站申请Oauth授权, 填写应用名和登陆成功后重定向地址. \n\n> ## 代码\n\n前端只需要设置一个携带id和redirect地址的跳转就行\n```\nhttps://github.com/login/oauth/authorize?client_id=d094df5206d99f67e373&redirect_uri=http://sellardoor.cn/\n```\n我这里是登录成功重定向到首页, 首页useEffect判断url是否携带`code`, `code`存在就把`code`发送给后端\n\n后端代码\n```\nasync githublogin() {\n const { ctx } = this;\n const { code } = ctx.request.body; // 拿到前端给的code请求https://github.com/login/oauth/access_token\n const tokenResponse = await ctx.curl(\n \'https://github.com/login/oauth/access_token\',\n {\n method: \'post\',\n data: {\n client_id: \'*\', //github申请oauth后会提供\n client_secret: \'*\',\n code,\n },\n headers: {\n accept: \'application/json\',\n },\n }\n );\n const token = JSON.parse(tokenResponse.data.toString()).access_token; //返回的是buffer\n const result = await ctx.curl(\'https://api.github.com/user\', { //这里再拿token请求https://api.github.com/user获取用户信息\n method: \'get\',\n headers: {\n accept: \'application/json\',\n Authorization: `token ${token}`,\n },\n });\n const { login, avatar_url, email } = JSON.parse(result.data.toString());\n if (login !== \'\' && email !== \'\') { // 检查一下数据库是否存在该用户\n const hasLogin = await ctx.model.Blogusers.find({\n username: login,\n email,\n });\n if (hasLogin.length > 0) { // 存在的用户直接返回数据\n await ctx.model.Blogusers.update(\n { username: hasLogin[0].username, email: hasLogin[0].email },\n { recentlogin: +new Date() }\n );\n ctx.body = {\n success: true,\n result: {\n username: hasLogin[0].username,\n avatar: hasLogin[0].avatar,\n },\n };\n } else {\n if (login && email && avatar_url) { //不存在的用户 , 把需要的数据存储到数据库\n const newUser = await ctx.model.Blogusers.create({\n avatar: avatar_url,\n username: login,\n password: \'\',\n email,\n root: \'visitor\',\n origin: \'github\',\n date: +new Date(),\n recentlogin: +new Date(),\n });\n ctx.body = {\n success: true,\n result: {\n username: newUser.username, //前端显示用户名头像,所以只返回这两个\n avatar: newUser.avatar,\n },\n };\n } else {\n ctx.body = {\n success: false,\n };\n }\n }\n }\n }\n```\n',
		type:'功能实现',
		date:1591278923475,
		img:'http://cdn.sellardoor.cn/cbe46ba13e79def48d9b239a1f9338bf.jpg',
		view:93,
		__v:0,
		msg:8,
		hot:true,
		editDate:1596895651524
		}]

	const renderer = new marked.Renderer();

	marked.setOptions({
		renderer: renderer,
		gfm: true,
		pedantic: false,
		sanitize: false,
		breaks: false,
		smartLists: true,
		smartypants: false,
		highlight: function(code) {
			return highlight.highlightAuto(code).value;
		},
	});

	return (
		<div>
			{
				res.map(item => (
					<div className='flex padding_column_s padding_row_m hotList_wrap' key={item._id}>
						<img src={item.img} alt='' />
						<div className='flex direction_column padding_row_s'>
							<div className='hotList_type'>
								{ moment(item.date).format('DD MMMM YYYY') }
								<span className='margin_row_xxs'>.</span>
								{ item.type }
							</div>
							<div className='hotList_title' >{ item.title }</div>
							<div>
								<Tag color='#87c082de' icon={<EyeOutlined />}>
									<span>{ item.view }</span>
								</Tag>
								<Tag color='#fbc9b7' icon={<SmileOutlined />}>
									<span>+++</span>
								</Tag>
							</div>
							<div className='hotList_info' dangerouslySetInnerHTML={{ __html: marked(item.info) }} />
						</div>
					</div>
				))
			}
		</div>

	)
}


export default connect(
	state => ({
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		articleList: state.article.articleList
	})

)(HotList);