import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
import { createAction,ActionNames } from '../../redux/actions';
import axios from "axios/index";
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
		this.state = {
			loading: true,
		}
	    
	}
	// componentWillMount() {
	// 	var that = this;
	// 	setTimeout(function() {
	// 		that.show();
	// 	}, 2000);
	// }
	// componentWillMount() {
	// 	axios.post('/getProducts')
	// 		.then(response => this.setState({loading:false}));
	// }
	// show() {
	// 	this.setState({loading : false});
	// }

	/**
	 * Price
	 * @param price
	 */
	onPriceChange(price,sort){
		const {emitter} = this.props;
		emitter.emit("REFRESH_PRODUCTS",{
			query : {
				price : {
					$gte : price[0],
					$lte : price[1]
				}
			},
			sort
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
// function bindAction(dispatch) {
// 	return {
//		
// 	};
// }

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
//Connect to Redux , bindAction
export default connect(mapStateToProps)(Main);
