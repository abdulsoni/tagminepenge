import React, { Component } from 'react';
import ComponentView from './view';
import axios from 'axios';
import { connect } from 'react-redux';
import { createAction,ActionNames } from '../../redux/actions/index';
import {getError} from '../../utils/request';
/**
 * @name Product  Component
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
			loading : true
		}
	}
	componentDidMount(){
		this.getProduct()
	}
	getProduct(){
		const {getProduct} = this.props;
		let pathname = window.location.pathname;
		let id = pathname.split("/")[2];
		if(id && id!=""){
			console.log(id)
			getProduct(id).then(action=>{
				console.log(action)
				if(getError(action)){
					//window.location.href="/";
					return;
				} else {
					this.setState({
						loading : true
					})
				}

			})
		} else {
			//window.location.href="/";
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
		product: state.product
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Product';

export default connect(mapStateToProps, bindAction)(Main);

