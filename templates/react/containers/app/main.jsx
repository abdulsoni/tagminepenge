import React, { Component } from 'react';
import ComponentView from './view';
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
	}

	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		
		return (ComponentView.bind(this))();
	}
}
//Set display name to be used in React Dev Tools
Main.displayName = 'Main';
