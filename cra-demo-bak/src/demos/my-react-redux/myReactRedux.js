/**
 * 实现react-redux
 */
import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'

const ValueContext = React.createContext()
// connect
export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps
) => WrappedComponent => {
    return class extends Component {
        // 此时组件的所有生命周期都能获得this.context
        static contextType= ValueContext
        constructor(props) {
            super(props)
            this.state = {
                props: {}
            }
        }
        componentDidMount() {
            this.update()
            const { subscribe } = this.context
            subscribe(() => {
                this.update()
            })
        }
        update = () => {
            const { getState, dispatch } = this.context
            const stateProps = mapStateToProps(getState())
            let dispatchProps
            console.log('mapDispatchToProps', mapDispatchToProps)
            if (typeof mapDispatchToProps === 'object') {
                dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
            } else if (typeof mapDispatchToProps === 'function') {
                dispatchProps = mapDispatchToProps(dispatch, this.props)
            } else {
                mapDispatchToProps = {dispatch}
            }
            this.setState({
                props: {
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }
        render() {
            console.log('this.context', this.context)
            return <WrappedComponent {...this.props} {...this.state.props} />
        }
    }
}

export class Provider extends Component {
    render() {
        return (
            <ValueContext.Provider value={this.props.store}>
                {this.props.children}
            </ValueContext.Provider>
        )
    }
}

// let creators = {
//     add: () => ({type: 'ADD'}),
//     minus: () => ({type: 'MINUS'})
// }
function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}

export function bindActionCreators(creators, dispatch) {
    let obj = {}
    for (const key in creators) {
        obj[key] = bindActionCreator(creators[key], dispatch)
    }
    return obj
}
