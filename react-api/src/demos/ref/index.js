// ref三种使用方式：
// 1.string ref (React17版本会被废弃掉，不推荐使用)
// 2.function
// 3.createRef

import React, { Component } from 'react';

export default class RefDemo extends Component {
    constructor() {
        super();
        this.objRef = React.createRef();
    }
    componentDidMount() {
        setTimeout(() => {
            this.refs.stringRef.textContent = 'string ref got'
            this.methodRef.textContent = 'method ref got'
            this.objRef.current.textContent = 'obj ref got'
        }, 1000)
    }
    render() {
        return (
            <>
                <p ref="stringRef">span1</p>
                <p ref={ele => (this.methodRef = ele)}>span2</p>
                <p ref={this.objRef}>span3</p>
            </>
        );
    }
}
