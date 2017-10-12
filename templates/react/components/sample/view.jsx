import React from 'react';

import Styles from "./style.css"
var view = function() {
	console.log(Styles.sample)
	return (
		<div className={Styles.sample}>
			<h1>Sample Component1</h1>
		</div>
	);
};
export default view;
 
 
