import React from 'react';
import Styles from "./style.scss";
var view = function() {
	console.log(Styles.sample)
	return (
		<div className={[Styles.sample, Styles.sample2].join(" ")}>
			<h1>Sample Component1</h1>
		</div>
	);
};
export default view;
 
 
