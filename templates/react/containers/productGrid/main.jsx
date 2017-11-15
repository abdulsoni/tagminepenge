import React, { Component } from 'react';
import ComponentView from './view';
import axios from 'axios';
import { connect } from 'react-redux';
import { createAction,ActionNames } from '../../redux/actions/index';
/**
 * @name Product Grid Component
 * @type Component
 * @author Inderdeep Singh
 */
class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 */
	constructor(props){
		super(props);
		if(props.query){
			this.getProducts();
		}
	}

	/**
	 * Component Did Mount
	 */
	componentDidMount(){
		const {emitter} = this.props;
		emitter.addListener("REFRESH_PRODUCTS",(query)=>{
			console.log(query)
			this.getProducts(1,query)
		})
	}

	/**
	 * Get products
	 * @param page
	 */
	getProducts(page,customQuery){
		page = page || 1;
		const {getProducts,query} = this.props;
		getProducts({
			...query,
			limit : 10,
			skip : (page-1)*10
		}).then(action=>{
			//console.log(action)
		})
	}
	
	/**
	 * Render the view
	 * @returns {*}
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
		getProducts : (data)=>{
			return dispatch(createAction(ActionNames.GET_PRODUCTS,data));
		}
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
		data: state.products.results || [],
		hasMore : state.products.hasMore,
		emitter : state.emitter
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Product Grid';

export default connect(mapStateToProps, bindAction)(Main);

