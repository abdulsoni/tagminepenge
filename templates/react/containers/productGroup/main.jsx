import React, { Component } from 'react';
import ComponentView from './view';
import axios from 'axios';
import { createAction,ActionNames } from '../../redux/actions/index';
import {getError} from '../../utils/request';
import { connect } from 'react-redux';
/**
 * @name Category Component
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
		this.state = {
			selectCategory : null,
			category : null,
			query : null
		};
	}
	componentDidMount(){
		this.getQuery();
	}
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
	 * Select Category
	 * @param key
	 */
	selectCategory(key){
		this.setState({
			selectCategory : key
		})
	}
	/**
	 * Get Query
	 * @returns {*}
	 */
	getQuery(){
		if(typeof window=='undefined'){
			return null;
		}
		const {categories} = this.props;
		let pathname = window.location.pathname;
		let name = pathname.split("/")[2] || "";
		let category = categories.filter((category)=>{
			return category.key.toLowerCase()==name.toLowerCase();
		});
		console.log(category);
		if(category.length==0){
			window.location.href = "/";
			return null;
		} else {
			category = category[0];
			this.setState({
				selectCategory : category,
				category,
				query :{
					query : {
						categories : {
							$in : [category._id]
						}
					}
				} 
			});
		}
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
		getProduct : (data)=>{
			return dispatch(createAction(ActionNames.GET_PRODUCT,data));
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
		products: state.products.results,
		emitter : state.emitter
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Category-Page';

export default connect(mapStateToProps, bindAction)(Main);

