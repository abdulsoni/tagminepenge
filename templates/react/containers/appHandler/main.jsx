import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
/**
 * @name Main Container
 * @type Component
 * @author Inderdeep Singh
 */
export default class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 */
	constructor(props){
		super(props);
		this.state = {
			hidden : "hidden", // flag for API
			loading: true,
			title:'My Title',
			image:'This is my image',
			description:'this is My description',
			productLink:'https://www.tagminepenge.dk/produkt/5a354154a86dca00046d8139/Candyfloss-Maskine',
			metaTitle:'this is my metaTitle'
		};
	}
	componentDidMount(){

	}
	
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
		emitter : state.emitter
	};
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Main';
 connect(mapStateToProps)(Main);
