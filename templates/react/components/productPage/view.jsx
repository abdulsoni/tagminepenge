import React from 'react';
import styles from "./style.scss";
import Carousel from '../../components/carousel';
import ProductGrid from '../../components/productGrid';
var view = function () {
	return (
		<div className="product-page">
			<div className="container product">
				<div className="row">
					<div className="col-md-6 column">
						<Carousel/>
					</div>
					<div className="col-md-6 column">
						<div className="product-details">
							<div className="product-title">
								<p>Cafuer Watch</p>
							</div>
							<div className="product-description">
								<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
							</div>
							<div className="product-price">
								<p>$350</p>
							</div>
							<div className="product-actions">
								<button className="btn btn-yellow">Check it out</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ProductGrid/>
		</div>
	);
};
export default view;
 
 
