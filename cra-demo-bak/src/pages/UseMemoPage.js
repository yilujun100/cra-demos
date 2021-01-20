/**
 * useMemo
 * 把"创建"函数和依赖项数组作为参数传入useMemo,它仅会在某个依赖项改变时才重新计算memoized值。这种优化有助于避免在每次渲染时都进行高开销的计算。
 */

import React, { useState, useMemo } from 'react';

export default function UseMemoPage() {
    const [count, setCount] = useState(0);
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
        // 只有count变化，这里才重新执行
    }, [count]);
    const [value, setValue] = useState('');
    return (
        <div>
            <h3>UseMemoPage</h3>
            <p>expensive: {expensive}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>add</button>
            <input value={value} onChange={event => setValue(event.target.value)} />
        </div>
    );
}
