import React from 'react'
import classNames from 'classnames'

class Icon extends React.Component {
	static propTypes = {
		onClick: React.PropTypes.func.isRequired,
		iconName: React.PropTypes.string.isRequired,
	}
	render () {
		const { onClick, iconName } = this.props
		return (
			<li className={styles.item}
				{...{ onClick }}>
				<i className={classNames('fa', iconName, styles.icon)}></i>
				{this.props.children}
			</li>
		);
	}
}