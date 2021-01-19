// ! 使用 Route Component 方式注意事项：
// 当你用component的时候, Router会用你指定的组件和 React.createElement 创建一个新的 React Element。
// 这意味着当你提供的是一个内联函数的时候, 每次 render 都会创建一个新的组件。这会导致不再更新已经现有组件，
// 而是直接卸载然后再去挂载一个新的组件。因此, 当用到内联函数的内联渲染时, 请使用 render 或者 children
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class RouteComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	render() {
		const { count } = this.state;
		return (
			<div>
				<h3>RouteComponent</h3>
				<button
					onClick={() => {
						this.setState({ count: count + 1 });
					}}
				>
					click change count {count}
				</button>
				<Router>
					{/* 渲染component的时候会调用React.createElement, 如果使用下面这种匿名函数的形式, 每次都会生成一个新的匿名函数
                    导致生成的组件的type总是不相同, 这个时候会产生重复的卸载和挂载 */}
					{/* 错误举例 观察child的didMount和willUnmount函数 */}
					{/* <Route component={() => <Child count={count} />} /> */}
					{/* 下面才是正确的示范 */}
					<Route render={() => <Child count={count} />} />
				</Router>
			</div>
		);
	}
}

class Child extends Component {
	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		return <div>child-{this.props.count}</div>;
	}
}