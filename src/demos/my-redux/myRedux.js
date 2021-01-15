/**
 * Redux 核心实现
 */

/**
 * 生成 store 对象
 * @param {*} reducer 接收 previousState 和 action type, 返回新的 state
 * @param {*} enhancer 增强器
 */
export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentState = undefined // 保存当前状态
    let currentListeners = [] // 回调函数
    // 返回当前的state
    function getState() {
        return currentState
    }
    // 订阅监听函数, 存放在数组中, store.dispatch(action) 时遍历执行
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    // 派发动作, 也就是把 subscribe 收集的函数, 依次遍历执行
    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(listener => listener())
        return action
    }
    // 通过调用dispatch设置状态初始值,这里要保证type值为一个随机字符串,不和项目中的重复
    dispatch({ type: '@@redux/INIT-YLJ-REDUX' })
    return {
        getState,
        subscribe,
        dispatch
    }
}

/**
 * applyMiddleware() 函数是一个增强器, 组合多个中间件, 最终增强 store.dispatch 函数, dispatch 时, 可以串联执行所有中间件
 * @param  {...any} middlewares 中间件
 * @return 返回的是加强版的 dispatch(默认dispatch 只支持纯对象)
 */
export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)
        let dispatch = store.dispatch
        const middlewareAPI = {
            getState: store.getState,
            dispatch
        }
        const middlewareChain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...middlewareChain)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}

/**
 * 聚合函数：组合多个函数, 从右到左, 比如 compose(f1, f2, f3)('omg') -> f1(f2(f3('omg')))
 * @param  {...any} funcs
 */
export function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
