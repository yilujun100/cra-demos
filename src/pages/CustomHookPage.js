/**
 * 自定义Hook
 * 有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和render props。自定义Hook可以让你在不增加组件的情况下达到同样的目的。
 * 自定义Hook是一个函数，其名称以"use"开头，函数内部可以调用其他的Hook
 * Hook使用规则
 * Hook就是JavaScript函数，但是使用它们会有两个额外的规则：
 *  1.只能在函数最外层调用Hook。不要在循环、条件判断或者子函数中调用。
 *  2.只能在React函数组件中调用Hook.不要在其他JavaScript函数中调用。（还有一个地方可以调用Hook——就是自定义的Hook中）
 */
import React, { useState, useEffect } from 'react'

export default function CustomHookPage() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('count effect');
        document.title = `点击了${count}次`;
    }, [count]);
    return (
        <div>
            <h3>CustomHookPage</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <p>{useClock().toLocaleTimeString()}</p>
        </div>
    );
}

// 自定义hook,命名必须以use开头
function useClock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        // 只需要在didMount时候执行就可以了
        console.log('date effect');
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        // 清除定时器，类似willUnmount
        return () => clearInterval(timer);
    }, []);
    return date;
}
