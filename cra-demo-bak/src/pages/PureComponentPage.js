/**
 * PureComponent
 * 实现性能优化
 *  定制了shouldComponentUpdate后的Component
 * 浅比较
 *  缺点是必须要用class形式，而且要注意是浅比较
 * 与Component之间的关联
 *  React.PureComponent 与 React.Component 很相似。
 *  两者的区别在于React.Component并未实现shouldComponentUpdate(),而React.PureComponent中以浅层对比prop和state的方式来实现了该函数。
 *  如果赋予React组件相同的props和state,render()函数会渲染相同的内容，那么在某些情况下使用React.PureComponent可提高性能。
 * 注意：
 *  React.PureComponent中的shouldComponentUpdate()仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。
 *  仅在你的props和state较为简单时，才使用React.PureComponent,或者在深层数据结构发生变化时调用forceUpdate()来确保组件被正确地更新。
 *  此外，React.PureComponent中的shouldComponentUpdate()将跳过所有子组件树的prop更新。因此，请确保所有子组件也都是"纯"的组件。
 */
import React, { PureComponent } from 'react';

export default class PureComponentPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            // obj: {
            //     num: 0
            // }
        };
    }

    setCounter = () => {
        this.setState({
            counter: 100,
            // obj: {
            //     num: 200
            // }
        });
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.counter !== this.state.counter;
    // }

    render() {
        console.log('render');
        const { counter } = this.state;
        return (
            <div>
                <h3>PureComponentPage</h3>
                <button onClick={this.setCounter}>{counter}</button>
            </div>
        );
    }
}
