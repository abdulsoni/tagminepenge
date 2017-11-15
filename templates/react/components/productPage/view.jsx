import React from 'react';
import styles from "./style.scss";
import Carousel from '../../components/carousel';
import ProductGrid from '../../containers/productGrid';
import Banner from '../../components/banner/index';

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
								<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum."</p>
							</div>
							<div className="product-price">
								<p>$350</p>
							</div>
							<div className="product-actions">
								<button className="btn btn-yellow">Check it out</button>
							</div>
							<div className="share">
								<ul>
									<li>
										<a className="facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
									</li>
									<li>
										<a className="twitter"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
									</li>
									<li>
										<a className="pinterest"><i className="fa fa-pinterest-square" aria-hidden="true"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
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
 
 
