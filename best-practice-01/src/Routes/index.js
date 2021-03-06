import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import BasicLayout from '../layout/BasicLayout';
import PrivateRoute from './PrivateRoute';

const bottomNav = {};

const routes = [
	{
		path: '/',
		title: '首页',
		props: { exact: true },
		component: HomePage
	},
	{
		path: '/login',
		title: '登录',
		component: LoginPage
	},
	{
		path: '/user',
		title: '用户中心',
		component: PrivateRoute
	}
];

// todo: 实现topBar的顶部title显示, 注意优化, 不要重复渲染
export default function Routes(props) {
	return (
		<Router>
			<Route component={TopBar} />
			<Route component={BottomNav} />
			<Switch>
				{/* {routes.map(item => {
					return (
						<Route
							{...item.props}
							path={item.path}
							key={item.path}
							component={item.component}
						/>
					);
				})} */}
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={LoginPage} />
				<PrivateRoute path="/user">
					<UserPage />
				</PrivateRoute>
			</Switch>
		</Router>
	);
}
