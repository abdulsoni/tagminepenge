import React, { Component } from 'react';
import ComponentView from './view';
import { createAction,ActionNames } from '../../redux/actions/index';
var global = require("global");
var window = require("global/window");
import {getError} from '../../utils/request';
import { connect } from 'react-redux';
/**
 * @name Main Container
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
			hidden : "hidden", // flag for API
			loading: true,
			meta:{
				title:'My Title',
				image:'https://res.cloudinary.com/tagminepenge/image/upload/v1513439651/u18duf7qtfhgsgp7fabg.png',
				description:'this is My description',
				productLink:'https://www.tagminepenge.dk/produkt/5a354154a86dca00046d8139/Candyfloss-Maskine',
			},
			key:'',
			metaTitle:'Tagmine Penge'
		};
		
	}
	componentDidMount(){
		console.log(this.state.meta);
	}
	componentWillMount(){
		console.log(this.state.meta);
		let pathname=this.props.url;
		let productLink="https://www.tagminepenge.dk"+pathname;
		this.getProduct()
			.then((data) => {
							let meta = Object.assign({}, this.state.meta);
							meta.title = data.title;
							meta.image = data.image.secure_url;
							meta.description = data.content.brief;
							meta.productLink = productLink;
							this.setState({meta});
							
			});
		
	
	}

	changeprop(){
		
		alert('abc');
	}
	/**
	 * Get product
	 */
	getProduct(){
		const {getProduct} = this.props;
		let location = window.location;
		let pathname=this.props.url;
		let id = pathname.split("/")[2]
		let productLink="https://www.tagminepenge.dk"+pathname;
		console.log(productLink);
		var promise = new Promise((resolve, reject) => {
			getProduct(id).then(action=>{
				if(getError(action)){
					//window.location.href="/";
					return;
				} else {
					let data= action.payload.data;
					resolve(data);
				}

			})
		});
		return promise;
		// if(id && id!=""){
		// 	getProduct(id).then(action=>{
		// 		console.log(action)
		// 		if(getError(action)){
		// 			//window.location.href="/";
		// 			return;
		// 		} else {
		// 			let data= action.payload.data;
		// 			let meta = Object.assign({}, this.state.meta);
		// 			meta.title = data.title;
		// 			meta.image = data.image.secure_url;
		// 			meta.description = data.content.brief;
		// 			meta.productLink = productLink;
		// 			this.setState({meta});
		// 			return data;
		// 		}
        //
		// 	})
		// } else {
		// 	//window.location.href="/";
		// }

	}
	// changeprop(productLink,e){
	// 	console.log(productLink);
	// 	console.log(this.props.meta);
	// 	this.props.meta.title=this.props.data.title;
	// 	this.props.meta.description=this.props.data.content.brief;
	// 	this.props.meta.image=this.props.data.image.url;
	// 	this.props.meta.url=productLink;
	// 	console.log('working');
	// 	console.log(this.props);
	// 	this.forceUpdateHandler();
	// }
	
	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		
		return (ComponentView.bind(this))();
	}
}
function bindAction(dispatch) {
	return {
		getProduct : (data)=>{
			return dispatch(createAction(ActionNames.GET_PRODUCT,data));
		},
		addToWishList : (data)=>{
			return dispatch(createAction(ActionNames.SAVE_TO_WISHLIST,data));
		}
	};
}
const mapStateToProps = state => {
	// console.log(state)
	return {
		products : state.products.results || [],
		emitter : state.emitter,
		metaTag: state.metaTag,
		product: state.product
	};
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Main';
export default connect(mapStateToProps,bindAction)(Main);
