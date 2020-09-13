/**
 * 正确使用setState
 * setState(partialState, callback)
 *  1.partialState: object|function
 *    用于产生与当前state合并的子集
 *  2.callback: function
 *    state更新之后被调用
 *
 * 关于setState()你应该了解三件事：
 *  1.不要直接修改State
 *  // 错误示范
 *  this.state.comment = 'Hello';
 *  // 正确使用
 *  this.setState({comment: 'Hello'});
 *  2.state的更新可能是异步的
 *  出于性能考虑，React可能会把多个setState()调用合并成一个调用
 *
 *  如果要获取到最新状态值有以下方式：
 *  在回调中获取状态值
 *  使用定时器
 *  原生事件中修改状态
 *  3.state的更新会被合并
 */

import React, { Component } from 'react'

export default class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        // this.changeValue(1);
        document.getElementById('test').addEventListener('click', this.setCounter);
    }

    changeValue = v => {
        // setState在合成事件和生命周期中是异步的，这里说的异步其实是批量更新，达到了优化性能的目的
        /* this.setState({
            counter: this.state.counter + v
        }, () => {
            // callback就是在state更新完成之后再执行
            console.log('counter', this.state.counter);
        }); */
        this.setState(state => ({counter: state.counter + v}));
    };

    setCounter = () => {
        this.changeValue(1);
        this.changeValue(2);
        this.changeValue(3);
        // console.log('counter', this.state.counter);
        // setState在setTimeout和原生事件中是同步的
        // setTimeout(() => {
        //     this.changeValue(1);
        // }, 0);
    };

    render() {
        const { counter } = this.state;
        return (
            <div>
                <h3>SetState</h3>
                <button onClick={this.setCounter}>{counter}</button>
                <button id="test">原生事件{counter}</button>
            </div>
        )
    }
}
