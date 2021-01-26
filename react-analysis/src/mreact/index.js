// ! vnode 就代表虚拟dom节点
// ! node代表真实dom节点

// 根据节点类型返回vnode, 接收type, config, children
function createElement(type, props, ...children) {
	// console.log('createElement', arguments);
	if (props) {
		delete props.__source;
		delete props.__self;
	}
	return {
		type,
		props: {
			...props,
			// ! 这里的处理与源码稍有不同，源码里的话，只有一个元素，children是对象，多于一个的时候，是数组
			children: children.map(child =>
				typeof child === 'object' ? child : createTextNode(child)
			)
		}
	};
}

function createTextNode(text) {
	return {
		type: 'TEXT',
		props: {
			children: [],
			nodeValue: text
		}
	};
}

export default {
	createElement
};
