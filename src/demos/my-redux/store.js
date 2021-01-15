// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from './myRedux'

function countReducer(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}

// const store = createStore(countReducer, applyMiddleware(logger, thunk))
const store = createStore(countReducer, applyMiddleware(thunk, logger))

export default store

function logger() {
    return dispatch => action => {
        console.log(`${action.type}执行了`)
        return dispatch(action)
    }
}

function thunk({ getState }) {
    return dispatch => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        } else {
            return dispatch(action)
        }
    }
}
