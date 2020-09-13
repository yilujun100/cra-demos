/**
 * 组件
 * 组件，从概念上类似于JavaScript函数。它接收任意的入参（即"props"）,并返回用于描述页面展示内容的React元素
 * 组件有两种形式：class组件和function组件
 * class组件
 * class组件通常拥有状态和生命周期，继承于Component,实现render方法
 */

// 用class组件创建一个Clock
import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        // 使用state维护属性状态，在构造函数中初始化状态
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        // 组件挂载之后启动定时器每秒更新状态
        this.timerID = setInterval(() => {
            // 使用setState更新状态
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        // 组件卸载前清除定时器
        clearInterval(this.timerID);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
        );
    }
}