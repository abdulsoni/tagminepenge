import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {text} = this.props;
	return text?(
		<div className="bottom-text">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<p>{text}</p>
				</div>
				<div className="col-md-2"></div>
			</div>
		</div>
	):null;
};
export default view;
 
 
