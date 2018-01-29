import React, { Component } from 'react';
import ComponentView from './view';
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
		this.forceUpdate();
	}
	changeprop(){
		
		alert('abc');
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
const mapStateToProps = state => {
	// console.log(state)
	return {
		products : state.products.results || [],
		emitter : state.emitter,
		metaTag: state.metaTag,
	};
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Main';
export default connect(mapStateToProps)(Main);
