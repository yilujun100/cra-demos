// 定义修改规则 登录
const initialUserInfo = {
	isLogin: false, // 判断是否登录
	loading: false, // 显示loading状态
	userInfo: {
		// 详细数据信息
		id: null,
		name: null
	},
	tip: {}, // 提示信息
	err: {} // 错误显示信息
};
export function userReducer(state = { ...initialUserInfo }, action) {
	switch (action.type) {
		case 'LOGOUT_REQUEST':
		case 'LOGIN_REQUEST':
			return {
				...state,
				loading: true
			};
		case 'LOGIN_SUCCESS':
			return {
				isLogin: true,
				loading: false,
				userInfo: action.payload
			};
		case 'LOGIN_FAILURE':
			return {
				...state,
				...initialUserInfo,
				...action.payload
			};
		case 'LOGOUT_SUCCESS':
			return {
				isLogin: false,
				...initialUserInfo,
				...action.payload
			};
		case 'LOGOUT_FAILURE':
			return {
				...state,
				...initialUserInfo,
				...action.payload
			};
		default:
			return state;
	}
}
