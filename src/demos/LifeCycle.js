/**
 * 组件生命周期
 * 生命周期方法
 * 生命周期方法，用于在组件不同阶段执行自定义功能。在组件被创建并插入到DOM时（即挂载中阶段mounting）,组件更新时，组件取消挂载或从DOM中删除时，都有可以使用的生命周期方法。
 * V16.3之前的版本：
 * 初始阶段：defaultProps & propTypes => constructor
 * 挂载阶段：componentWillMount => render => componentDidMount
 * 更新阶段：
 *  1.state发生变化：shouldComponentUpdate => return true(性能优化点，如果return false 后面生命周期方法将不会执行) => componentWillUpdate => render => componentDidUpdate
 *  2.父组件重新render() props改变：componentWillReceiveProps => shouldComponentUpdate => return true => componentWillUpdate => render => componentDidUpdate
 * 卸载阶段：
 *  componnetWillUnmount
 * V17可能会废弃的三个生命周期函数用getDerivedStateFromProps替代，目前使用的话加上UNSAFE_:
 *  componentWillMount
 *  componentWillReceiveProps
 *  componnetWillUpdate
 * 引入两个新的生命周期函数：
 *  static getDerivedStateFromProps
 *  getSnapshotBeforeUpdate
 * 如果不想手动给将要废弃的生命周期添加 UNSAFE_前缀，可以用下面的命令
 *  npx react-codemod rename-unsafe-lifecycles <path>
 *
 * 新引入的两个生命周期函数
 * getDerivedStateFromProps
 * static getDerivedStateFromProps(props, state)
 * getDerivedStateFromProps会在调用render方法之前调用，并且在初始挂载及后续更新时都会被调用。它返回一个对象来更新state,如果返回null则不更新任何内容
 * 请注意，不管原因是什么，都会在每次渲染前触发此方法。这与UNSAFE_componentWillReceiveProps形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用setState时。
 * getSnapshotBeforeUpdate
 * getSnapshotBeforeUpdate(prevProps, prevState)
 * 在render之后，在componentDidUpdate之前。
 * getSnapshotBeforeUpdate()在最近一次渲染输出（提交到DOM节点）之前调用。它使得组件能在发生更改之前从DOM中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给componentDidUpdate(prevProps, prevState, snapshot)
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class LifeCycle extends Component {
    static defaultProps = {
        // msg: 'omg'
    };
    static propTypes = {
        // msg: PropTypes.string.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        // getDerivedStateFromProps 会在调用render方法之前调用
        // 并且在初始挂载及后续更新时都会被调用
        // 它应返回一个对象来更新state,如果返回null则不更新任何内容
        const { count } = state;
        console.log('getDerivedStateFromProps', count);
        return count < 5 ? null : { count: 0 };
    }

    // 在render之后，在componentDidUpdate之前
    getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
        const { count } = prevState;
        console.log('getSnapshotBeforeUpdate', count);
        return null;
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { count } = nextState;
        console.log('shouldComponentUpdate', nextState, this.state);
        return count !== 3;
    }

    // UNSAFE_componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    setCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log('render', this.props);
        const { count } = this.state;
        return (
            <div>
                <h3>LifeCycle page</h3>
                <p>{count}</p>
                <button onClick={this.setCount}>改变count</button>
                {/* {count % 2 && <Child count={count} />} */}
                <Child count={count} />
            </div>
        );
    }
}

class Child extends Component {
    // 初次渲染的时候不会执行，只有在已挂载的组件接收新的props的时候，才会执行
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        console.log('child render');
        const { count } = this.props;
        return (
            <div>
                <h3>Child</h3>
                <p>{count}</p>
            </div>
        );
    }
}