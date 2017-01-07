import React from 'react'
import classNames from 'classnames'

// css
import styles from '../../css/layerOperation.css'

export default class LayerOopetation extends React.Component {
  static propTypes = {
    handleNewLayer: React.PropTypes.func.isRequired,
    handleRemoveLayer: React.PropTypes.func.isRequired,
  }
  render () {
    const { handleNewLayer, handleRemoveLayer } = this.props
    return (
      <ul className={styles.opetation}>
        <Opetation onClick={handleNewLayer} iconName='fa-file-o'></Opetation>
        <Opetation onClick={handleRemoveLayer} iconName='fa-trash'></Opetation>
      </ul>
    )
  }
}

class Opetation extends React.Component {
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