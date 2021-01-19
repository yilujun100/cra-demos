import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import UserPage from './UserPage';

function SearchComponent({ match, history, location }) {
	const { id } = match.params;
	return (
		<div>
			<h3>SearchComponent</h3>
			<p>{id}</p>
			<Link to={`/search/${id}/detail`}>详情</Link>
			<Route path="/search/:id/detail" component={DetailComponent} />
		</div>
	);
}

function DetailComponent(propa) {
	return <div>DetailComponent</div>;
}

export default class RouterPage extends Component {
	render() {
		const searchId = '123';
		return (
			<div>
				<h1>RouterPage</h1>
				<Router>
					<nav>
						<Link to="/">首页</Link>
						<Link to="/user">用户中心</Link>
						<Link to={'/search/' + searchId}>搜索</Link>
					</nav>
					{/* 添加Switch表示仅匹配一个 */}
					<Switch>
						{/* 根路由要添加exact, 实现精确匹配 */}
						<Route exact path="/" component={HomePage} />
						<Route path="/user" component={UserPage} />
						{/* 动态路由 */}
						<Route path="/search/:id" component={SearchComponent} />
						<Route render={() => <h1>404</h1>} />
					</Switch>
				</Router>
			</div>
		);
	}
}