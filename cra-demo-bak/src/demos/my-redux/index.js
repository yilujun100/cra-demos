import React, { Component } from 'react'
import store from './store'

export default class ReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate()
        })
    }
    add = () => {
        store.dispatch({ type: 'ADD' })
    }
    minus = () => {
        store.dispatch({ type: 'MINUS' })
    }
    asyncAdd = () => {
        store.dispatch(dispatch => {
            setTimeout(() => {
                dispatch({ type: 'ADD' })
            }, 1000)
        })
    }
    render() {
        console.log('store', store)
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyncAdd}>add</button>
            </div>
        )
    }
}
