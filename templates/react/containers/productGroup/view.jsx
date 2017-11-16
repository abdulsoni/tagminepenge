import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../productGrid/index';
import PriceRange from '../../components/priceRange/index';
import {getMinPrice,getMaxPrice} from '../../helpers/product'
var view = function() {
	const {products,categories,user} = this.props;
	const {category,query} = this.state;
	return category?(
		<div className="product-group">
			<div className="container">
				<div className="row">
					<div className="col-md-3 column">
						<div className="categories">
							<ul>
								{
									(categories || []).map((category)=>{
										let selected = category._id==this.state.selectCategory._id;
										let categoryLink = window.location.protocol + "//"+window.location.host+"/category/"+category.key;
										return (
											<li key = {category._id}>
												<a href={categoryLink} className={selected?"selected":null}>{category.name}</a>
												{
													selected?(
														<div className="sub-categories">
															{
																(category.subcategories || []).map((subcategory)=>{
																	return (
																		<a key = {subcategory._id}>{subcategory.name}</a>
																	);
																})
															}
														</div>
													):null
												}
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className="col-md-9 column">
						<div className="category-wise">
							<div className="category-title">
								<p>{
									category.name
								}</p>
							</div>
							<div className="category-description">
								<p>{
									category.description
								}</p>
							</div>
							<div className="price-range">
								<PriceRange
									min={getMinPrice(products)}
									max={getMaxPrice(products)}
									onPriceChange = {this.onPriceChange.bind(this)}
								/>
								
							</div>
							<div className="products">
								<ProductGrid
									query = {query}
									user = {user}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	):null;
};
export default view;
 
 
