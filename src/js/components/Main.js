import _ from 'lodash';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as OekakiCanvasActions from '../actions/OekakiCanvasActions';

class Main extends React.Component {
	render() {
		return (
			<main id="main">
				<article>
					{this.props.children}
				</article>
			</main>
		);
	}
}

function mapStateToProps(state) {
	return {
		OekakiCanvasActionsReducer : state.OekakiCanvasActionsReducer,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		OekakiCanvasActions: bindActionCreators(OekakiCanvasActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
