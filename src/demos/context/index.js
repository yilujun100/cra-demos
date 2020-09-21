/**
 * context——跨层级组件通信
 * context两种使用方式：
 * childContextType(v17将会被废弃掉)
 * createContext
 */

import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext('default');

class Parent extends React.Component {
    state = {
        childContext: '123',
        newContext: '456'
    };

    getChildContext() {
        return { value: this.state.childContext };
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>childContext:</label>
                    <input
                        type="text"
                        value={this.state.childContext}
                        onChange={e => this.setState({ childContext: e.target.value })}
                    />
                </div>
                <Provider value={this.state.newContext}>{this.props.children}</Provider>
            </React.Fragment>
        );
    }
}

function Child1() {
    return <Consumer>{value => <p>newContext: {value}</p>}</Consumer>;
}

class Child2 extends React.Component {
    render() {
        return <p>childContext: {this.context.value}</p>;
    }
}

Child2.contextTypes = {
    value: PropTypes.string
};

Parent.childContextTypes = {
    value: PropTypes.string
};

export default () => (
    <Parent>
        <Child1 />
        <Child2 />
    </Parent>
);