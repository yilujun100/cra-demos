/**
 * ref
 * 在React中，我们写的class component render中会渲染一系列子组件或者DOM节点，有时候我们会有这样的需求希望获取某个DOM节点或子组件实例，去对它进行一些手动操作，而不仅仅是props更新这种方式去更新这个节点（比如说，获取DOM节点，绑定事件）
 * React为我们提供ref,我们可以很方便的在组件内部获取子组件的实例
 * ref的三种使用方式：
 * string ref
 * function
 * createRef
 */
import React, { Component } from 'react';

export default class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.objRef = React.createRef(); // { current: null }
    }

    componentDidMount() {
        // console.log(`span1: ${this.refs.stringRef.textContent}`);
        setTimeout(() => {
            this.refs.stringRef.textContent = 'string ref got';
            this.methodRef.textContent = 'method ref got';
            this.objRef.current.textContent = 'obj ref got';
        }, 1000);
    }

    render() {
        return (
            <div>
                <h3>RefDemo</h3>
                <p ref="stringRef">span1</p>
                <p ref={ele => (this.methodRef = ele)}>span2</p>
                <p ref={this.objRef}>span3</p>
            </div>
        );
    }
}
