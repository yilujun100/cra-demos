import React from "react";
import TodoList from "./demos/TodoList";
import ClassComponent from './demos/ClassComponent';
import FunctionComponent from './demos/FunctionComponent';
import SetState from './demos/SetState';
import LifeCycle from './demos/LifeCycle';
import HomePage from './pages/HomePage';
import ReactReduxPage from './pages/ReactReduxPage';
import ReactRouterPage from './pages/ReactRouterPage';
import HookPage from './pages/HookPage';
import CustomHookPage from './pages/CustomHookPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';
import RefDemo from './demos/ref';
import ForwardRefDemo from './demos/forward-ref';
import ContextDemo from './demos/context';
import Hoc from "./demos/Hoc";
import MyForm from './demos/antd-form';
import Dialog from './demos/dialog';
import MyRedux from './demos/my-redux';
import "antd/dist/antd.css";

function App() {
	return (
		<div className="App">
			{/* class组件 */}
			{/* <ClassComponent /> */}
			{/* function组件 */}
			{/* <FunctionComponent /> */}
			{/* setState使用 */}
			{/* <SetState /> */}
			{/* 组件生命周期 */}
			{/* <LifeCycle /> */}
			{/* 组件复合 */}
			{/* <HomePage /> */}
			{/* redux使用 */}
			{/* <TodoList /> */}
			{/* react-redux */}
			{/* <ReactReduxPage /> */}
			{/* react-router */}
			{/* <ReactRouterPage /> */}
            {/* <HookPage /> */}
            {/* <CustomHookPage /> */}
            {/* <UseMemoPage /> */}
            {/* <UseCallbackPage /> */}
			{/* <RefDemo /> */}
			{/* <ForwardRefDemo /> */}
			{/* <ContextDemo /> */}
			{/* Hoc-高阶组件 */}
			{/* <Hoc /> */}
			{/* <MyForm /> */}
			{/* <Dialog /> */}
            <MyRedux />
		</div>
	);
}

export default App;