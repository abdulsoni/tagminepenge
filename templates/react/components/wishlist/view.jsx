import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../../components/productGrid';
import Banner from '../../components/banner/index';
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
			<div className="more">
				<div className="row">
					<div className="col-md-0 col-lg-2 column left">
						<Banner/>
					</div>
					<div className="col-md-12 col-lg-8 column">
						<ProductGrid/>
					</div>
					<div className="col-md-0 col-lg-2 column right">
						<Banner/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
