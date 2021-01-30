// hooks给我们的function component提供了class component所具有的能力, 它的意义不仅仅是为了替代class component,
// 它的意义是想要去帮助我们去拆分一些在组件内部的逻辑, 把它提取出来能够给更多的组件进行复用。那么以前,在class component
// 里面是很难拆分这部分逻辑的。
import React, { useState, useEffect } from 'react';

export default () => {
	const [name, setName] = useState('yilujun100');

	useEffect(() => {
		console.log('component update');

		return () => {
			console.log('unbind');
		};
	}, []);

	return (
		<>
			<p>My Name is: {name}</p>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
		</>
	);
};
