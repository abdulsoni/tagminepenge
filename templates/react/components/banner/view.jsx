import React from 'react';
import styles from "./style.scss";

var view = function() {
	const {banner} = this.props;
	return (
		<div className="banner content-center background" style={{backgroundImage : 'url('+banner+')'}}>
			{/*<p>banner</p>*/}
		</div>
	);
};
export default view;
 
 
