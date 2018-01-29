import React, { Component } from 'react';
import ComponentView from './view';
import { createAction,ActionNames } from '../../redux/actions/index';
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
		this.getProduct()
	}


	changeprop(){
		
		alert('abc');
	}
	/**
	 * Get product
	 */
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
