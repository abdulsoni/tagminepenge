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
	componentDidMount(){
		setTimeout(()=>{
			var script = document.createElement('script');
			script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a0ad3e012097c2a";
			document.getElementsByTagName('head')[0].appendChild(script);
		},1000)
		$(window).scroll(()=> {
			var scroll = $(window).scrollTop();

			if (scroll >= 300) {
				$(this.appRef).addClass("scrolled");
			} else {
				$(this.appRef).removeClass("scrolled");
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
Main.displayName = 'Main';
