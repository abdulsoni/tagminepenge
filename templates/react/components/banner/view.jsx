import React from 'react';
import styles from "./style.scss";

var view = function() {
	const {banner,link,style,fixedWhenScrolling,show} = this.props;
	return show?(
		<a target="blank" href={link}>
			<div className="banner content-center background" style={{backgroundImage : 'url('+banner+')',...style}}>
				
			</div>
		</a>
	):null;
	
};
export default view;
 
 
