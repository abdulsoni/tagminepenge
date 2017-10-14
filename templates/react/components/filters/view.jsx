import React from 'react';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="filters container">
			<ul>
				<li>
					<a>Newest</a>
				</li>
				<li>
					<a>Popular</a>
				</li>
				<li>
					<a>Price Range</a>
				</li>
				<li>
					<a>Gifts Under $20</a>
				</li>
			</ul>
		</div>
	);
};
export default view;
 
 
