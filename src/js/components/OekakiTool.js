import React from 'react'
import classNames from 'classnames'

// css
import styles from '../../css/oekakiTool.css'

export default class OekakiTool extends React.Component {
  static propTypes = {
    handleEraser: React.PropTypes.func.isRequired,
    handlePencil: React.PropTypes.func.isRequired,
		handleDropper: React.PropTypes.func.isRequired,
    handleZoom: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.setState({
      selected: 'pencil'
    })
  }

  render () {
		const { handleEraser, handlePencil, handleDropper, handleZoom } = this.props
    const { selected } = this.state
    return (
      <div className={styles.tool}>
        <ul className={styles.items}>
          <MenuItem onClick={() => {
            handlePencil();
            this.setState({selected: 'pencil'})
           }} selected={selected === 'pencil'} iconName='fa-pencil'>
          </MenuItem>
          <MenuItem onClick={() => {
            handleEraser();
            this.setState({selected: 'eraser'})
           }} selected={selected === 'eraser'} iconName='fa-eraser'>
          </MenuItem>
					<MenuItem onClick={() => {
						handleDropper();
						this.setState({selected: 'dropper'})
					 }} selected={selected === 'dropper'} iconName='fa-eyedropper'>
					</MenuItem>
          <MenuItem onClick={() => {
            handleZoom(true);
            this.setState({selected: 'zoomIn'})
           }} selected={selected === 'zoomIn'} iconName='fa-search-plus'>
          </MenuItem>
          <MenuItem onClick={() => {
            handleZoom(false);
            this.setState({selected: 'zoomOut'})
           }} selected={selected === 'zoomOut'} iconName='fa-search-minus'>
          </MenuItem>
        </ul>
      </div>
    )
  }
}

class MenuItem extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
    iconName: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool.isRequired,
  }
  render () {
    const { onClick, iconName, selected } = this.props
    return (
      <li className={classNames(styles.item,
          {[styles.selected]: selected}
        )}
        {...{ onClick }}>
        <i className={classNames('fa', iconName, styles.icon)}>
        </i>
        {this.props.children}
      </li>
    );
  }
}