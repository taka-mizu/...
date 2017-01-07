import React from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import {DragDropContext} from 'react-dnd'
import ReactDnDHTML5Backend from 'react-dnd-html5-backend'

// css
import styles from '../../css/layers.css'

// Components
import DragItem from './DragItem';

@DragDropContext(ReactDnDHTML5Backend)
export default class Layers extends React.Component {
	static propTypes = {
		layers: React.PropTypes.any,
		layerNum: React.PropTypes.number,
		handleChangeVisible: React.PropTypes.func,
		handleChangeLayer: React.PropTypes.func,
		handleChangeLayers: React.PropTypes.func,
		updateCanvas: React.PropTypes.func,
	}
	render () {
		const layers = this.props.layers;

		return (
			<ul className={styles.layers} ref={`layers`}>
				{
					_.map(layers ? _.cloneDeep(this.props.layers).reverse() : [], (layer, index) => {

						const i = Math.abs(layers.length - 1 - index)

						return (
							<DragItem key={i}
								handleChangeLayer={() => this.props.handleChangeLayer(i)}
								handleChangeVisible={() => this.props.handleChangeVisible(i)}
								selected={i === this.props.layerNum}
								id={i}
								layer={layer}
								onDrop={(fromId, toId) => {
									const toIndex = layers.findIndex((layer, j) => j === toId)
									const fromIndex = layers.findIndex((layer, j) => j === fromId)
									const toItem = layers[toIndex]
									const fromItem = layers[fromIndex]

									layers.splice(toIndex - fromIndex > 0 ? toIndex + 1: toIndex, 0, fromItem)
									layers.splice(toIndex - fromIndex < 0 ? fromIndex + 1 : fromIndex, 1)

									this.props.handleChangeLayer(toIndex)
									this.props.handleChangeLayers(layers)
									this.props.updateCanvas()
								}}
							>
								{''}
							</DragItem>
						)
					})
				}
			</ul>
		)
	}

	componentDidMount() {
	}
	componentWillReceiveProps(nextProps) {
	}
}