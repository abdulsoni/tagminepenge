import React, { Component } from 'react';
import ComponentView from './view';
/**
 * @name Sample Component
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
	}

	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		console.log(this.props)
		return (ComponentView.bind(this))();
	}
}
//Set display name to be used in React Dev Tools
Main.displayName = 'Sample-Component';
