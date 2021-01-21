import React, { Component } from 'react'
import { RouterContext } from './RouterContext'
import matchPath from './matchPath'

export default class Route extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {context => {
                    const { path, children, component, render } = this.props
                    // const match = context.location.pathname === path
                    const location = this.props.location || context.location
                    const match = matchPath(location.pathname, this.props)
                    const props = {
                        ...context,
                        location,
                        match
                    }
                    // console.log('match', match)
                    return match ?
                        (children ?
                            (typeof children === 'function' ? children(props) : children)
                            : (component ? (React.createElement(component, props)) : (render ? render(props) : null)))
                        : (typeof children === 'function' ? children(props) : null)
                    // return match ? React.createElement(component, this.props) : null
                }}
            </RouterContext.Consumer>
        )
    }
}
