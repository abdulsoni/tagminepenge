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
			query : null
		};
	}
	componentDidMount(){
		this.getQuery();
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
		let text = pathname.split("/")[2] || "";
		if(!text || text==''){
			window.location.href = "/";
			
		} else {
			this.setState({
				query :{
					query : {
						$or : [
							{title : { "$regex": text, "$options": "i" }},
							{"content.brief" : { "$regex": text, "$options": "i" }},
							{"categories.name" : { "$regex": text, "$options": "i" }}
						]
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

