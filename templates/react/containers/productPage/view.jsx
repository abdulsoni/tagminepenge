import React from 'react';
import styles from "./style.scss";
import Carousel from '../../components/carousel/index';
import ProductGrid from '../productGrid/index';
import Banner from '../../components/banner/index';
import {getPlainText, getBackgroundImageStyle} from '../../utils/common'
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
} from 'react-share';
var view = function () {
	const {product, config, user} = this.props;
	const presentInWishList = this.presentInWishList();
	const leftBanner = (config.leftBanner && config.leftBanner.media) ? config.leftBanner.media.url : null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value) ? config.leftBanner.value : null;
	const rightBanner = (config.rightBanner && config.rightBanner.media) ? config.rightBanner.media.url : null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value) ? config.rightBanner.value : null;
	let productLink = null;
	let imageUrl = null;
	let productText = config["product-text"]?config["product-text"].value:null;
	let id;
	let title;
	if (typeof window != 'undefined' && product) {
		productLink = window.location.protocol + "//" + window.location.host + "/produkt/" + product._id + "/" + product.title.split(" ").join("-");
		const {data} = this.props;
       
		//const {_id} = data;
	 id=product._id;
	 title=product.title.split(" ").join("-");
	
		if (product.image) {
			imageUrl = product.image.url;
		}
	}
	let facebookProductLink = "https://www.tagminepenge.dk/produkt/"+id+"/"+title;
			const FacebookIcon = generateShareIcon('facebook');
	const TwitterIcon = generateShareIcon('twitter');
	const PinterestIcon = generateShareIcon('pinterest');
	const VKIcon = generateShareIcon('vk');
	const {FacebookShareButton,TwitterShareButton,PinterestShareButton,VKShareButton} = ShareButtons;
			var IconStyle={
		'width':'90px',
	'marginRight': '7px',
	'paddingTop':'3px'
	};
	return product ? (
		<div className="product-page">
			<div className="row">
				<div className="col-md-0 col-lg-2 column left">
					<Banner style={{height: 500}} banner={leftBanner} link={leftBannerlink}/>
				</div>
				<div className="col-md-12 col-lg-8 column">
					<div className="row product">
						<div className="col-md-6 column">
							<Carousel data = {(product.image?[product.image.url]:[]).concat((product.moreImages || []).map((image)=>{
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
									<p>{product.price?product.price + " kr.":""}</p>
								</div>
								<div className="product-actions">
									<a href={product.link} target="_blank">
										<button className="btn btn-yellow checkout-btn">Tjek det ud</button>
									</a>
									{
										user ? (
											<a>
												<button onClick={this.addToWishList.bind(this)}
														className="btn btn-yellow save-btn">{presentInWishList ? "Fjern" : "GEM"}</button>
											</a>
										) : (
											<a data-toggle="modal" data-target="#login-modal">
												<button className="btn btn-yellow save-btn">GEM</button>
											</a>
										)
									}

								</div>
								<div className="share">
									<div className="row" style={IconStyle}>
							            <div className="col-sm-4">
											<FacebookShareButton url={facebookProductLink} quote={product.title} image={imageUrl}  >
												<FacebookIcon size={25} round={false} />
											</FacebookShareButton>
										</div>
										<div className="col-sm-4">
											<TwitterShareButton url={facebookProductLink} title={product.title} via={getPlainText(product.content.brief)} image={imageUrl}>
												<TwitterIcon size={25} round={false} />
											</TwitterShareButton>
										</div>
										<div className="col-sm-4">
											<PinterestShareButton url={facebookProductLink}  description={getPlainText(product.content.brief)} media={imageUrl}>
												<PinterestIcon size={25} round={false} />
											</PinterestShareButton>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
					<p className="more-text">{productText}</p>
					<ProductGrid
						user={user}
						query={{
							// query: {
							// 	categories: {
							// 		$in: product.categories || []
							// 	}
							// },
							sort : '-publishedDate'
						}}/>
				</div>
				<div className="col-md-0 col-lg-2 column right">
					<Banner style={{height: 500}} banner={rightBanner} link={rightBannerlink}/>
				</div>
			</div>
		</div>
	) : null;
};
export default view;
 
 
