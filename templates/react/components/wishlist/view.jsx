import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../../components/productGrid';

var view = function () {
	return (
		<div className="wish-list">
			<div className="heading container">
				<div className="title">
					<p>My Wish List</p>
				</div>
				<div className="share">
					<span className="title">Share: </span>
					<ul>
						<li><a className="facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
						<li><a className="twitter"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
						<li><a className="pinterest"><i className="fa fa-pinterest-square" aria-hidden="true"></i></a></li>
						<li><a className="link"><i className="fa fa-share-square-o" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div>
			<ProductGrid/>
		</div>
	);
};
export default view;
 
 
