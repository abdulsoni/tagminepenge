import React, { Component } from 'react';
import ComponentView from './view';
/**
 * @name Header Component
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
	 * Component Did Mount hook
	 */
	componentDidMount(){
		$(window).scroll(()=> {
			var scroll = $(window).scrollTop();
			
			if (scroll >= 300) {
				$(this.headerRef).addClass("shrink");
			} else {
				$(this.headerRef).removeClass("shrink");
			}
		});
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
Main.displayName = 'Header';
