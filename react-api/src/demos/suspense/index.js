// 在一个Suspense组件的内部, 如果有多个组件, 它要等到所有组件都resolve之后才会把fallback去掉, 显示里面的内容
// 如果里面有任何一个组件处于pending状态它还是会显示fallback
// lazy: 配合webpack实现组件的异步加载
import React, { Suspense, lazy } from 'react';

const LazyComp = lazy(() => import('./lazy.js'));

let data = '';
let promise = '';
function requestData() {
	if (data) return data;
	if (promise) throw promise;
	promise = new Promise(resolve => {
		setTimeout(() => {
			data = 'Data resolved';
			resolve();
		}, 2000);
	});
	throw promise;
}

function SuspenseComp() {
	const data = requestData();

	return <p>{data}</p>;
}

export default () => (
	<Suspense fallback="loading data">
		<SuspenseComp />
		<LazyComp />
	</Suspense>
);
