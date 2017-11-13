import React, { Component } from 'react';
import ComponentView from './view';
import {handleChange} from '../../utils/common'
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
		this.state = {
			"email" : "name@gmail.com",
			"password" : "***********",
			"loading" : false,
			"message" : null
		}
		this.handleChange = handleChange.bind(this)
	}
	componentDidMount(){
		
	}
	submit(event){
		event.preventDefault();
		console.log('Form Submitting');
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
Main.displayName = 'Sample-Component';
