/**
 * 组件跨层级通信——context
 * 在一个典型的React应用中，数据是通过props属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如地区偏好，UI主题）,这些属性是应用程序中许多组件都需要的。
 * context提供了一种在组件之间共享此类值的方式，而不必显示地通过组件树逐层传递props。
 * React中使用context实现祖代组件向后代组件跨层级传值。
 * Context API:
 * createContext: 用于创建一个Context对象
 * Provider: 祖代提供值
 * Consumer: 后代消费值
 * contextType: 挂载在class组件上的contextType属性会被重新赋值为一个由React.createContext()创建的Context对象。这能让你使用this.context来消费最近Context上的那个值。你可以在任何生命周期中访问到它，包括render函数中
 * 使用context步骤：
 * 1. 创建 createContext
 * 2. Provider接收value,以保证有传下去的数据
 * 3. 接收 Consumer或者class.contextType
 *
 * 注意事项：
 * 因为context会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，当provider的父组件进行重渲染时，可能会在consumers组件中触发意外的渲染。
 * 举个例子，当每一次Provider重渲染时，以下的代码会重渲染所有下面的consumers组件，因为value属性总是被赋值为新的对象
 * class App extends React.Component {
 *   render() {
 *      <Provider value={{something: 'something'}}>
 *          <Toolbar />
 *      </Provider>
 *   }
 * }
 * 为了防止这种情况，将value状态提升到父节点的state里：
 * class App extends React.Component {
 *   constructor(props) {
 *      super(props);
 *      this.state = {
 *          value: {something: 'something'}
 *      };
 *   }
 *   render() {
 *      <Provider value={this.state.value}>
 *          <Toolbar />
 *      </Provider>
 *   }
 * }
 * 总结：
 * 在React的官方文档中，Context被归类为高级部分，属于React的高级API,但官方并不建议在稳定版的APP中使用Context
 * 不过，这并非意味着我们不需要关注Context。事实上，很多优秀的React组件都通过Context来完成自己的功能，比如react-redux的<Provider />,就是通过Context提供一个全局态的store,
 * 路由组件react-router通过Context管理路由状态等等。在React组件开发中，如果用好Context,可以让你的组件变得强大，而且灵活
 * 函数组件中可以通过useContext引入上下文
 */
import React, { Component } from 'react';
import { ThemeProvider } from './ThemeContext';
import ContextTypePage from './ContextTypePage';
import ConsumerPage from './ConsumerPage';
import { UserProvider } from './UserContext';
import MultipleContextPage from './MultipleContextPage';

export default class ContextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                themeColor: 'red'
            },
            user: {
                name: 'xiaoming'
            }
        };
    }

    changeColor = () => {
        const { themeColor } = this.state.theme;
        this.setState({
            theme: {
                themeColor: themeColor === 'red' ? 'green' : 'red'
            }
        });
    };

    render() {
        const { theme, user } = this.state;
        return (
            <div>
                <h3>ContextPage</h3>
                {/* 组件跨层级通信 */}
                <button onClick={this.changeColor}>change color</button>
                {/* 如果把这里的ThemeProvider注释掉，ContextTypePage和ConsumerPage里将取不到theme值，而取默认值pink */}
                <ThemeProvider value={theme}>
                    <ContextTypePage />
                    <ConsumerPage />
                    {/* 消费多个context */}
                    <UserProvider value={user}>
                        <MultipleContextPage />
                    </UserProvider>
                </ThemeProvider>
            </div>
        )
    }
}
