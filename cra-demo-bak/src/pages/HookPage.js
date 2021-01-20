/**
 * 认识Hook
 * Hook是什么？ Hook是一个特殊的函数，它可以让你"钩入"React的特性。例如，useState是允许你在React函数组件中添加state的Hook.
 * 什么时候会用Hook? 如果你在编写函数组件并意识到需要向其添加一些state,以前的做法是必须将其转化为class.现在你可以在现有的函数组件中使用Hook.
 * 使用Effect Hook
 * Effect Hook可以让你在函数组件中执行副作用操作
 * 数据获取，设置订阅以及手动更改React组件中的DOM都属于副作用。不管你知不知道这些操作，或是"副作用"这个名字，应该都在组件中使用过它们。
 * 在函数组件主体内（这里指在React渲染阶段）改变DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的bug并破坏UI的一致性。
 * 使用useEffect完成副作用操作。赋值给useEffect的函数会在组件渲染到屏幕之后执行。你也可以把effect看作从React的纯函数式世界通往命令式世界的逃生通道。
 * 默认情况下，effect将在每轮渲染结束后执行，但你可以选择让它在只有某些值改变的时候才执行。
 * effect的条件执行
 * 默认情况下，effect会在每轮组件渲染完成后执行。这样的话，一旦effect的依赖发生变化，它就会被重新创建。
 * 然而，在某些场景下这么做可能会矫枉过正。比如订阅示例中，我们不需要在每次组件更新时都创建新的订阅，而是仅需要在props改变时重新创建。
 * 要实现这一点，可以给useEffect传递第二个参数，它是effect所依赖的值数组。
 * 清除effect
 * 通常，组件卸载时需要清除effect创建的诸如订阅或计时器ID等资源。要实现这一点，useEffect函数需要返回一个清除函数，以防止内存泄漏，清除函数会在组件卸载前执行
 */
import React, { useState, useEffect } from 'react';

export default function HookPage() {
    // 什么一个叫count的state变量，初始化为0
    const [count, setCount] = useState(0);
    const [date,setDate] = useState(new Date());
    // 与 componentDidMount 和 componentDidUpdate相似
    useEffect(() => {
        console.log('count effect');
        // 更新title
        document.title = `You clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('date effect');
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    );
}
