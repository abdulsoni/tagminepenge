import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
import { createAction,ActionNames } from '../../redux/actions';
/**
 * @name Home Container
 * @type Container
 * @author Inderdeep Singh
 */
class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 */
	constructor(props){
		super(props);
	}

	/**
	 * Price
	 * @param price
	 */
	onPriceChange(price){
		const {emitter} = this.props;
		emitter.emit("REFRESH_PRODUCTS",{
			price : {
				$gte : price[0],
				$lte : price[1]
			}
		});
	}
	/**
	 * Render the view
	 */
	render() {
		return (ComponentView.bind(this))();
	}
}

/**
 * Bind Actions
 * @param dispatch
 * @returns Object
 */
function bindAction(dispatch) {
	return {
		
	};
}

/**
 * Map the shared state to properties
 * @param state
 * @returns Object
 */
const mapStateToProps = state => {
	// console.log(state)
	return {
		products : state.products.results || [],
		emitter : state.emitter
	};
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Home-Container';
//Connect to Redux
export default connect(mapStateToProps, bindAction)(Main);
