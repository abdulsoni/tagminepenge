import React from 'react';
import styles from "./style.scss";
import Carousel from '../../components/carousel/index';
import ProductGrid from '../productGrid/index';
import Banner from '../../components/banner/index';
import {getPlainText,getBackgroundImageStyle} from '../../utils/common'
var view = function () {
	const {product,config,user} = this.props;
	const leftBanner = (config.leftBanner && config.leftBanner.media)?config.leftBanner.media.url:null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const rightBanner = (config.rightBanner && config.rightBanner.media)?config.rightBanner.media.url:null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value)?config.rightBanner.value:null;
	let productLink = null;
	let imageUrl = null;
	if(typeof window!='undefined' && product){
		productLink = window.location.protocol+"//"+window.location.host+"/product/"+product._id+"/"+product.title.split(" ").join("-");
		if(product.image){
			imageUrl = product.image.url;
		}
	}
	return product?(
		<div className="product-page">
			<div className="container product">
				<div className="row">
					<div className="col-md-6 column">
						<Carousel data = {[product.image.url].concat((product.moreImages || []).map((image)=>{
							return image.url;
						}))}/>
					</div>
					<div className="col-md-6 column">
						<div className="product-details">
							<div className="product-title">
								<p>{product.title}</p>
							</div>
							<div className="product-description">
								<p>{product.content.brief}</p>
							</div>
							<div className="product-price">
								<p>${product.price || 0}</p>
							</div>
							<div className="product-actions">
								<a href={product.link}>
								<button className="btn btn-yellow">Check it out</button>
								</a>
								{
									user?(
										<a>
											<button className="btn btn-red save-btn">Save</button>
										</a>
									):(
										<a data-toggle="modal" data-target="#login-modal">
											<button className="btn btn-red save-btn">Save</button>
										</a>
									)
								}
								
							</div>
							<div className="share">
								<div
									data-url = {productLink} data-title={product.title} data-description={getPlainText(product.content.brief)}
									data-media={imageUrl} className="addthis_inline_share_toolbox"/>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="more">
				<div className="row">
					<div className="col-md-0 col-lg-2 column left">
						<Banner banner = {leftBanner} link = {leftBannerlink}/>
					</div>
					<div className="col-md-12 col-lg-8 column">
						<ProductGrid
							user = {user}
							query = {{
								query : {
									categories : {
										$in : product.categories || []
									}
								}
							}}
						
						/>
					</div>
					<div className="col-md-0 col-lg-2 column right">
						<Banner banner = {rightBanner} link = {rightBannerlink}/>
					</div>
				</div>
			</div>
		</div>
	):null;
};
export default view;
 
 
