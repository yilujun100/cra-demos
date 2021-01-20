/**
 * react-router
 * react-router包含3个库,react-router、react-router-dom、react-router-native。react-router提供最基本的路由功能，
 * 实际使用的时候我们不会直接安装react-router,而是根据应用运行的环境选择安装react-router-dom（在浏览器中使用）或 react-router-native（在rn中使用）。
 * react-router-dom和react-router-native都依赖react-router,所以在安装时，react-router也会自动安装。
 * react-router中奉行一切皆组件的思想，路由器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect都以组件形式存在
 *
 *
 * Route渲染内容的三种方式：
 * Route渲染优先级：children > component > render
 * 这三种方式互斥，你只能用一种
 * children: func
 * 有时候，不管location是否匹配，你都需要渲染一些内容，这时候你可以使用children
 * 除了不管location是否匹配都会被渲染之外，其它工作方法与render完全一样
 * render: func
 * 但是当你用render的时候，你调用的只是个函数
 * 只有当location匹配的时候渲染
 * component: component
 * 只有当location匹配的时候渲染
 *
 *
 * 404页面
 * 设定一个没有path的路由在路由列表最后面，表示一定匹配
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class ReactRouterPage extends Component {
    render() {
        return (
            <div>
                <h3>ReactRouterPage</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>

                    {/* 添加Switch表示仅匹配一个 */}
                    <Switch>
                        {/* 根路由要添加exact，实现精确匹配 */}
                        <Route
                            exact
                            path="/"
                            component={HomePage}
                            // children={() => <div>children</div>}
                            // render={() => <div>render</div>}
                        />
                        <Route path="/user" component={UserPage} />
                        <Route component={EmptyPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

class HomePage extends Component {
    render() {
        return (
            <div>
                <h3>HomePage</h3>
            </div>
        );
    }
}

class UserPage extends Component {
    render() {
        return (
            <div>
                <h3>UserPage</h3>
            </div>
        );
    }
}

class EmptyPage extends Component {
    render() {
        return (
            <div>
                <h3>EmptyPage</h3>
            </div>
        );
    }
}
