import React from 'react';
import styles from "./style.scss";
var view = function() {
	return (
		<div className="card">
			<div className="card-header">
				<a href="/product" className="product-title">Twinkling Star Skirt</a>
			</div>
			<div className="card-body">
				<div className="product-image">
					<a href="/product"><span className="image"></span></a>
					<button className="btn btn-red save-btn">Save</button>
				</div>
				<div className="product-text">
					<p className="text">Brighten up any room you walk into by slipping into this eye-catching twinkling stars skirt. The skirt features a lovely blue hue and is accented with over 250 tiny LEDs powered by a battery pack that discreetly tucks away inside the waist.</p>
				</div>
			</div>
			<div className="card-footer">
				<div className="product-range">
					<p className="cost">$59.99</p>
					<span className="saves">
						<a className="icon"><i className="glyphicon glyphicon-heart-empty"></i> </a>
						<span className="count">828</span>
						<span> saves</span>
					</span>
				</div>
				<div className="product-action">
					<button className="btn btn-yellow">Check it out</button>
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
	);
};
export default view;
 
 
