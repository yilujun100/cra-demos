// 调用异步操作 阻塞call, 用于顺序执行
// 不阻塞 fork
// 状态更新 (dispatch) put
// 做监听 takeEvery take

import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
import LoginService from '../service/login';

// worker saga
function* loginHandle(action) {
	console.log('action', action);
	yield put({ type: 'LOGIN_REQUEST' });
	try {
		const res1 = yield call(LoginService.login, action.payload);
		// console.log('res1', res1)
		const res2 = yield call(LoginService.getMoreUserInfo, res1);
		yield put({ type: 'LOGIN_SUCCESS', payload: { ...res2, ...res1 } });
	} catch (err) {
		yield put({ type: 'LOGIN_FAILURE', payload: err });
	}
}

// watcher saga
function* loginSaga(params) {
	yield takeEvery('loginSaga', loginHandle);
	// const action = yield take('loginSaga');
	// yield fork(loginHandle, action);
	// console.log('res', action);
}

export default loginSaga;
