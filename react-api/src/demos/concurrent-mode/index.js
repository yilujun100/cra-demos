// ConcurrentMode的目标是让react的整体渲染过程进行一个优先级的排比, 并且让整体的渲染过程是能够中断的, 它就可以进行一个任务的调度。
// 我们知道JavaScript是单线程的语言, 如果我们执行react的更新占用了非常长的JavaScript的执行进程, 那么会导致比如浏览器执行一些动画
// 的渲染这种操作没有一个足够的时间去做, 就会导致动画变得比较卡顿, 或者我们进行一些input输入的时候, 发现响应会比较卡, 因为这个时候
// JavaScript正在运行react的更新。所以在这个时候, react让我们能够去区分一些优先级比较高和比较低的任务, 在进行react更新的过程中,
// 优先执行优先级高的任务, 然后在等浏览器把这些优先级高的任务执行完毕以后它有空余时间的时候, 执行优先级较低的任务。
import React, { ConcurrentMode } from 'react';
import { flushSync } from 'react-dom';

import './index.css';

class Parent extends React.Component {
	state = {
		async: true,
		num: 1,
		length: 2000
	};

	updateNum() {
		const newNum = this.state.num === 3 ? 0 : this.state.num + 1;
		if (this.state.async) {
			this.setState({
				num: newNum
			});
		} else {
			flushSync(() => {
				this.setState({
					num: newNum
				});
			});
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.updateNum();
		}, 200);
	}

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

	render() {
		const children = [];
		const { length, num, async } = this.state;

		for (let i = 0; i < length; i++) {
			children.push(
				<div className="item" key={i}>
					{num}
				</div>
			);
		}

		return (
			<div className="main">
				async:{' '}
				<input
					type="checkbox"
					checked={async}
					onChange={() => flushSync(() => this.setState({ async: !async }))}
				/>
				<div className="wrapper">{children}</div>
			</div>
		);
	}
}

export default () => (
	<ConcurrentMode>
		<Parent />
	</ConcurrentMode>
);
