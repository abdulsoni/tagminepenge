import React, { Component } from 'react';
import ComponentView from './view';
import Slider from 'bootstrap-slider';
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
			this.slider = new Slider('input.slider-input',{
				formatter: function(value) {
					return 'Current value: ' + value;
				}
			});
		})
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
Main.displayName = 'Price-Range';
