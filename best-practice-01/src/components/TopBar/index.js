import React, { Component } from 'react';
import './index.scss';

export default class TopBar extends Component {
	render() {
		const { title } = this.props;
		return (
			<div className="topbar">
				<span className="iconfont icon-chevron-copy"></span>
				<div className="menu-item">{title}</div>
			</div>
		);
	}
}
