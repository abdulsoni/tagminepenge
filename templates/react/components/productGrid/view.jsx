import React from 'react';
import styles from "./style.scss";
import Card from '../../components/card';
var view = function() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<Card/>
				</div>
				<div className="col-md-4">
					<Card/>
				</div>
				<div className="col-md-4">
					<Card/>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
