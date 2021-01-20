/**
 * redux不是专门为react来设计的，它还可以用到其他库
 * 那么react-redux是专门为react设计的，为了让我们能更方便的使用redux
 * react-redux提供了两个api
 *  1.Provider 为后代组件提供state
 *  2.connect 为组件提供数据和变更方法
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReactReduxPage extends Component {
    render() {
        const { num, add, minus } = this.props;
        return (
            <div>
                <h3>ReactReduxPage</h3>
                <p>{num}</p>
                <button onClick={add}>Add</button>
                <button onClick={minus}>Minus</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        num: state
    };
};

const mapDispatchToProps = {
    add: () => {
        return { type: 'add' };
    },
    minus: () => {
        return { type: 'minus' };
    }
};

export default connect(
    mapStateToProps, // 状态映射
    mapDispatchToProps // 派发事件映射
)(ReactReduxPage)
