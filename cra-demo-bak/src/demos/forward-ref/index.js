/**
 * forwardRef是用来解决HOC组件传递ref的问题的，所谓HOC就是Higher Order Component,
 * 比如使用redux的时候，我们用connect来给组件绑定需要的state,这其中其实就是给我们的组件在外层包了一层组件，然后通过...props的方式把外部的props传入到实际组件
 */

import React, { Component } from 'react'

const TargetComponent = React.forwardRef((props, ref) => (
    <input type="text" ref={ref} />
));

export default class ForwardRefDemo extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.ref.current.value = 'ref get input';
    }

    render() {
        return (
            <div>
                <h3>ForwordRefDemo</h3>
                <TargetComponent ref={this.ref} />
            </div>
        );
    }
}
