/**
 * 什么时候使用 useMemo 和 useCallback
 * 使用场景：
 * 1.引用相等
 * 2.昂贵的计算
 * 使用 useMemo 和 useCallback 的成本是：对于你的同事来说，你使代码更复杂了；你可能在依赖项数组中犯了一个错误，
 * 并且你可能通过调用内置的 hook、并防止依赖项和 memoized 值被垃圾收集，而使性能变差。如果你获得了必要的性能收益，
 * 那么这些成本都是值得承担的，但最好先测量一下。
 */

import React, { useState, memo, useCallback } from 'react'

const CountButton = memo(({ onClick, count }) => {
    console.log('render button')
    return <button onClick={onClick}>{count}</button>
})

// 每次点击其中任意一个按钮时，Counter 的状态都会发生变化，因此会重新渲染，然后重新渲染两个 CountButton。但是，实际上只需要重新渲染被点击的那个按钮。
// 因此，如果你点击第一个按钮，则第二个也会重新渲染，但没有任何变化，我们称之为"不必要的重新渲染"。大多数时候，我们不需要考虑去优化不必要的重新渲染。
const Counter = () => {
    const [count1, setCount1] = useState(0)
    const increment1 = useCallback(() => setCount1(c => c + 1), [])

    const [count2, setCount2] = useState(0)
    const increment2 = useCallback(() => setCount2(c => c + 1), [])

    return (
        <>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
        </>
    )
}

export default Counter
