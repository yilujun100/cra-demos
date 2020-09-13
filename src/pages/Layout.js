/**
 * 复合组件给与你足够的敏捷去定义自定义组件的外观和行为，这种方式更明确和安全。如果组件间有公用的非UI逻辑，将它们抽取为JS模块导入使用而不是继承它。
 */

import React, { Component } from 'react';
import TopBar from './../components/TopBar';
import BottomBar from './../components/BottomBar';

export default class Layout extends Component {
    componentDidMount() {
        const { title = '商城' } = this.props;
        document.title = title;
    }

    render() {
        const { children, showTopBar, showBottomBar } = this.props;
        console.log('children', children);
        return (
            <div>
                { showTopBar && <TopBar /> }
                { children.content }
                { children.txt }
                <button onClick={children.btnClick}>button</button>
                { showBottomBar && <BottomBar /> }
            </div>
        )
    }
}
