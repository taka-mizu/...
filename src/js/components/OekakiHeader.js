import React from 'react'
import classNames from 'classnames'

// css
import styles from '../../css/oekakiHeader.css'

export default class OekakiHeader extends React.Component {
  static propTypes = {
    handleSave: React.PropTypes.func.isRequired,
    handleReplay: React.PropTypes.func.isRequired,
  }
  render () {
    const { handleSave, handleReplay } = this.props
    return (
      <header className={styles.header}>
        <ul className={styles.menu}>
          <MenuItem onClick={handleSave} iconName='fa-save'>保存</MenuItem>
          <MenuItem onClick={handleReplay} iconName='fa-play-circle'>再生</MenuItem>
        </ul>
      </header>
    )
  }
}

class MenuItem extends React.Component {
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