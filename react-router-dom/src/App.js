import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './pages/PrivateRoute';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/">首页</Link>
                <Link to="/user">用户中心</Link>
                <Link to="/login">登录</Link>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <PrivateRoute path="/user" component={UserPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route render={() => <div>404</div>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;