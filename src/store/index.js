/**
 * 你可能不需要redux
 * redux是负责组织state的工具，但你也要考虑它是否适合你的情况，不要因为有人告诉你要用Redux就去用，花点时间好好想想使用了Redux会带来的好处或坏处。
 * 在下面的场景中，引入Redux是比较明智的：
 *  你有着相当大量的、随时间变化的数据
 *  你的state需要有一个单一可靠的数据来源
 *  你觉得把所有state放在最顶层组件中已经无法满足需要了
 *  某个组件的状态需要共享
 * redux是JavaScript应用的状态容器，提供可预测化的状态管理。它保证程序行为一致性且易于测试
 * redux上手
 * 用一个累加器举例
 *  1.需要一个store来存储数据
 *  2.store里的reducer初始化state并定义state修改规则
 *  3.通过dispatch一个action来提交对数据的修改
 *  4.action提交到reducer函数里，根据传入的action的type，返回新的state
 * 复习点：
 *  store是唯一的
 *  只有store能够改变自己的内容
 *  reducer是一个纯函数
 * 核心API:
 *  createStore 创建store
 *  store.getStore 获取状态值
 *  store.dispatch 提交更新
 *  store.subscribe 订阅store的改变
 */

import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;