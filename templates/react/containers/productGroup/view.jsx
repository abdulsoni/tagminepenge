import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../productGrid/index';
import PriceRange from '../../components/priceRange/index';
import Banner from '../../components/banner'
import {getMinPrice,getMaxPrice} from '../../helpers/product'
var view = function() {
	const {config,products,categories,user} = this.props;
	const {category,query} = this.state;
	const banner = (config.banner && config.banner.media)?config.banner.media.url:null;
	const link = (config.banner && config.banner.value)?config.banner.value:null;
	const leftBanner = (config.leftBanner && config.leftBanner.media)?config.leftBanner.media.url:null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const rightBanner = (config.rightBanner && config.rightBanner.media)?config.rightBanner.media.url:null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value)?config.rightBanner.value:null;

	return category?(
		<div className="product-group">
			
				<div className="row">
					{/*<div className="col-md-3 column">*/}
						{/*<div className="categories">*/}
							{/*<ul>*/}
								{/*{*/}
									{/*(categories || []).map((category)=>{*/}
										{/*let selected = category._id==this.state.selectCategory._id;*/}
										{/*let categoryLink = window.location.protocol + "//"+window.location.host+"/category/"+category.key;*/}
										{/*return (*/}
											{/*<li key = {category._id}>*/}
												{/*<a href={categoryLink} className={selected?"selected":null}>{category.name}</a>*/}
												{/*{*/}
													{/*selected?(*/}
														{/*<div className="sub-categories">*/}
															{/*{*/}
																{/*(category.subcategories || []).map((subcategory)=>{*/}
																	{/*return (*/}
																		{/*<a key = {subcategory._id}>{subcategory.name}</a>*/}
																	{/*);*/}
																{/*})*/}
															{/*}*/}
														{/*</div>*/}
													{/*):null*/}
												{/*}*/}
											{/*</li>*/}
										{/*)*/}
									{/*})*/}
								{/*}*/}
							{/*</ul>*/}
						{/*</div>*/}
					{/*</div>*/}
					<div className="col-md-0 col-lg-2 column left">
						<Banner style={{height:600}} banner = {leftBanner} link = {leftBannerlink}/>
					</div>
					<div className="col-md-12 col-lg-8 column">
						<Banner style = {{marginLeft : 30,marginRight : 30,height:150}} banner = {banner} link = {link}/>
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
					<div className="col-md-0 col-lg-2 column right">
						<Banner style={{height:600}} banner = {rightBanner} link = {rightBannerlink}/>
					</div>
				
			</div>
		</div>
	):null;
};
export default view;
 
 
