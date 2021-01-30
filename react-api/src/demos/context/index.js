// context API:
// 在react中, 组件与组件之间的沟通是通过props, 父组件通过props给子组件传递它认为子组件应该使用的一些属性,
// 父组件可以通过传递一些回调函数给子组件, 让子组件在某些特定的时候可以调用一些父组件的特性。但是, 我们会存在一个问题,
// 在react应用当中, 组件与组件之间并不只有父子关系, 它们还会存在父子嵌套多层之后, 第一层和最下层组件它们是一个祖孙关系,
// 那么它们中间会隔着好几层不同的组件, 如果它们之间要进行一些沟通, 我们通过props进行传递是不太现实的。因为中间那几层组件
// 不一定是我们自己写的, 而且中间组件要去传递props对它来说是一个完全没有意义的事情, 所以react为我们提供了一个context的
// 使用方式。上级组件当中我们提供了一个context对象之后, 它的子树里面, 只要是在它下面渲染的组件都可以通过context属性去
// 获取context提供的那部分内容, 以此达到一个跨层级传递信息的功能。
// context两种使用方式：
// 1.childContextType(17版本会被废弃掉)
// 2.createContext
// ! react为什么要废弃老的api:因为老的api对于context的提供方它下层所有的组件影响太大了, 它会导致它下层所有组件即便是在
// ! 没有任何更新的情况下, 它每次更新的过程中仍然要进行完整的渲染, 所以对性能的损耗会非常大。
import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext('default');

class Parent extends React.Component {
	state = {
		childContext: '123',
		newContext: '456'
	};
	getChildContext() {
		return { value: this.state.childContext, a: 'aaaaa' };
	}
	render() {
		return (
			<>
				<div>
					<label>childContext:</label>
					<input
						type="text"
						value={this.state.childContext}
						onChange={e => this.setState({ childContext: e.target.value })}
					/>
				</div>
				<div>
					<label>newContext:</label>
					<input
						type="text"
						value={this.state.newContext}
						onChange={e => this.setState({ newContext: e.target.value })}
					/>
				</div>
				<Provider value={this.state.newContext}>{this.props.children}</Provider>
			</>
		);
	}
}

class Parent2 extends React.Component {
	getChildContext() {
		return { a: 'bbbbb' };
	}

	render() {
		return this.props.children;
	}
}

function Child1(props, context) {
	console.log(context);
	return <Consumer>{value => <p>newContext: {value}</p>}</Consumer>;
}

Child1.contextTypes = {
	value: PropTypes.string
};

class Child2 extends React.Component {
	render() {
		return (
			<p>
				childContext: {this.context.value} {this.context.a}
			</p>
		);
	}
}

Child2.contextTypes = {
	value: PropTypes.string,
	a: PropTypes.string
};

Parent.childContextTypes = {
	value: PropTypes.string,
	a: PropTypes.string
};

Parent2.childContextTypes = {
	a: PropTypes.string
};

export default () => (
	<Parent>
		<Parent2>
			<Child1 />
			<Child2 />
		</Parent2>
	</Parent>
);
