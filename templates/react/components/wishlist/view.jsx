import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../../containers/productGrid';
import Banner from '../../components/banner/index';
var view = function () {
	const {config,user} = this.props;
	const leftBanner = (config.leftBanner && config.leftBanner.media)?config.leftBanner.media.url:null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const rightBanner = (config.rightBanner && config.rightBanner.media)?config.rightBanner.media.url:null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value)?config.rightBanner.value:null;
	let wishlistLink = "";
	if (typeof window != 'undefined' && product) {
		wishlistLink = window.location.protocol + "//" + window.location.host + "/my-Wishlist/";
	}
	return user?(
		<div className="wish-list">
			<div className="heading container">
				<div className="title">
					<p>My Wish List</p>
				</div>
				<div className="share">
					{/*<span>Share: &nbsp;</span>*/}
					<div
						data-url={productLink}
						data-title={"Check Min Ønskeliste"} data-description={"Check Min Ønskeliste"}
						className="addthis_inline_share_toolbox"/>

				</div>
			</div>
			<div className="more">
				<div className="row">
					<div className="col-md-0 col-lg-2 column left">
						<Banner banner = {leftBanner} link = {leftBannerlink}/>
					</div>
					<div className="col-md-12 col-lg-8 column">
						<ProductGrid
							query = {this.state.query}
							user = {user}
							onSaveToWishList = {this.onSaveToWishList.bind(this)}
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
 
 
