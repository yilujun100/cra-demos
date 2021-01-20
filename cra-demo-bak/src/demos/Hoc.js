/**
 * 高阶组件-HOC
 * 为了提高组件复用率，可测试性，就要保证组件功能单一性；但是若要满足复杂需求就要扩展功能单一的组件，在React里就有了HOC的概念
 * 定义：高阶组件是参数为组件，返回值为新组件的函数。
 */
import React, { Component } from 'react';

// hoc: 是一个函数，接收一个组件，返回另外一个组件
// 这里大写开头的Comp是指function或者class组件
const foo = Comp => props => {
    return (
        <div className="border">
            <Comp {...props} />
        </div>
    );
};

const foo2 = Comp => props => {
    return (
        <div className="border-green">
            <Comp {...props} />
        </div>
    );
};

function Child(props) {
    return <div>Child {props.name}</div>
}

// const Foo = foo(Child);
// 链式调用
const Foo = foo2(foo(foo(Child)));

class Hoc extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <Foo name="msg" />
            </div>
        );
    }
}

export default Hoc;