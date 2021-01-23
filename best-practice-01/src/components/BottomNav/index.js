import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const menu = [
	{
		key: 'home',
		title: '首页',
		link: '/',
		icon: 'shouye'
	},
	{
		key: 'cart',
		title: '购物车',
		link: '/cart',
		icon: 'gouwuche'
	},
	{
		key: 'olist',
		title: '订单列表',
		link: '/olist',
		icon: 'dingdanliebiao'
	},
	{
		key: 'user',
		title: '我的淘宝',
		link: '/user',
		icon: 'wode1'
	}
];
export default class BottomNav extends Component {
	render() {
		return (
			<ul className="bottom-nav">
				{menu.map(item => (
					<MenuItem key={item.key} {...item} />
				))}
			</ul>
		);
	}
}

function MenuItem(props) {
	return (
		<li className="menu-item">
			<span className={'iconfont icon-' + props.icon}></span>
			<Link to={props.link}>{props.title}</Link>
		</li>
	);
}
