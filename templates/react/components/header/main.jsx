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
		this.state = {
			searchText : ""
		}
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
		if(window.location.pathname.indexOf("/search")!=-1){
			let searchText = window.location.pathname.split("/")[2];
			this.setState({searchText})
		}
	}
	search(e){
		e.preventDefault();
		if(this.state.searchText && this.state.searchText.trim()!=''){
			window.location.href="/search/"+this.state.searchText;
		}
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
