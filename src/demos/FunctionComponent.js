/**
 * function组件
 * 函数组件通常无状态，仅关注内容展示，返回渲染结果即可
 * 从React16.8开始引入了hooks,函数组件也能够拥有状态
 */

// 用function组件创建一个Clock
import React, { useState, useEffect } from 'react';

export default function FunctionComponent() {
    const [date, setDate] = useState(new Date());
    useEffect(() => { // 副作用
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => clearInterval(timer); // 组件卸载的时候执行
    }, []);
    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    );
}

// 可以把useEffect Hook看作componentDidMount,componnetDidUpdate和componentWillUnmount这三个函数的组合
