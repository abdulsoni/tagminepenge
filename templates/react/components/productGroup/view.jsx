import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../../components/productGrid';
var view = function() {
	return (
		<div className="product-group">
			<div className="container">
				<div className="row">
					<div className="col-md-3 column">
						<div className="categories">
							<ul>
								<li>
									<a className="selected">Gifts For Men</a>
									<div className="sub-categories">
										<a>Man Cave</a>
										<a>Alcholic Gear</a>
									</div>
								</li>
								<li>
									<a>Gifts For Women</a>
								</li>
								<li>
									<a>Gifts For Dad</a>
								</li>
								<li>
									<a>Gifts For Mom</a>
								</li>
								<li>
									<a>Gadgets</a>
								</li>
								<li>
									<a>Food + Drinks</a>
								</li>
								<li>
									<a>Gifts For Pets</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-9 column">
						<div className="category-wise">
							<div className="category-title">
								<p>Gifts For Men</p>
							</div>
							<div className="category-description">
								<p>Buying gifts for men is difficult – especially for the man who has everything. Our unique list of hand picked men’s gifts has everything you need to find a suitable gift for any type of gentleman. Whether you’re trying to find a gift for the guy who has it all or just your regular Joe, we’ve got hundreds of gift ideas for guys to make sure you never again buy a boring gift for your brother, husband, boyfriend, or just a friend.</p>
							</div>
							<div className="price-range">
								
							</div>
							<div className="products">
								<ProductGrid/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
