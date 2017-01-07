import React from 'react'

// Components
import {Panel as ColorPickerPanel} from 'rc-color-picker';
import Layers from './Layers';
import BlendMode from './BlendMode';
import LayerOperation from './LayerOperation';

// css
import styles from '../../css/LayerContainer.css'

export default class LayerContainer extends React.Component {
	static propTypes = {
		handleChangeVisible: React.PropTypes.func.isRequired,
		handleBlendMode: React.PropTypes.func.isRequired,
		handleChangeAlpha: React.PropTypes.func.isRequired,
		handleChangeLayer: React.PropTypes.func.isRequired,
		handleChangeLayers: React.PropTypes.func.isRequired,
		handleNewLayer: React.PropTypes.func.isRequired,
		handleRemoveLayer: React.PropTypes.func.isRequired,
		updateCanvas: React.PropTypes.func.isRequired,
		layers: React.PropTypes.any,
		layerNum: React.PropTypes.number,
	}
	render () {
		const {
			handleChangeVisible,
			handleBlendMode,
			handleChangeAlpha,
			handleChangeLayer,
			handleChangeLayers,
			handleNewLayer,
			handleRemoveLayer,
			updateCanvas,
			layers,
			layerNum
		} = this.props

		return (
			<section className={styles.container}>
				<h2 className={styles.title}>レイヤー</h2>
				<header className={styles.header}>
					<BlendMode
						handleBlendMode={handleBlendMode}
						blendMode={layers ? layers[layerNum].blendMode : 0}
					/>

					<p className={styles.alpha}>不透明度 : <input type="text" style={{width: '30px'}} value={layers ? layers[layerNum].alpha * 100 : 100} classNeme="alpha" onChange={handleChangeAlpha} /> %
					</p>
				</header>

				<Layers
					{...{
						handleChangeVisible,
						handleChangeLayer,
						handleChangeLayers,
						layers,
						layerNum,
						updateCanvas
					}}
				/>

				<LayerOperation
					{...{
						handleNewLayer,
						handleRemoveLayer
					}}
				/>
			</section>
		);
	}
}