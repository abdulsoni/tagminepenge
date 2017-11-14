import React from 'react';
import styles from "./style.scss";
import Card from '../../components/card';
var view = function() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xm-12 col-sm-6 col-md-4">
					<Card/>
				</div>
				<div className="col-xm-12 col-sm-6 col-md-4">
					<Card/>
				</div>
				<div className="col-xm-12 col-sm-6 col-md-4">
					<Card/>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
