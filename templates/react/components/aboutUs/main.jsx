import React, { Component } from 'react';
import ComponentView from './view';
import axios from 'axios';
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
	componentDidMount(){
		setTimeout(()=>{
			$(".main-container").addClass("contact-us-container");
		},100)
	}
	componentWillUnmount(){
		setTimeout(()=>{
			$(".main-container").removeClass("contact-us-container");
		},100)
	
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
Main.displayName = 'About-Us';
