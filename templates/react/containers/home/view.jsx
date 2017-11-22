import React from 'react';
import styles from "./style.scss";
import Banner from '../../components/banner/index';
import Filters from '../../components/filters/index';
import PriceRange from '../../components/priceRange/index';
import ProductGrid from '../productGrid/index';
import {getMaxPrice,getMinPrice} from '../../helpers/product'
import BottomText from '../../components/bottomText'
var view = function() {
	const {config,filters,query,priceRange,products,user} = this.props;
	const banner = (config.banner && config.banner.media)?config.banner.media.url:null;
	const link = (config.banner && config.banner.value)?config.banner.value:null;
	const leftBanner = (config.leftBanner && config.leftBanner.media)?config.leftBanner.media.url:null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const rightBanner = (config.rightBanner && config.rightBanner.media)?config.rightBanner.media.url:null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value)?config.rightBanner.value:null;
	const bottomText = config["footer-text-new"]?config["footer-text-new"].description:null;
	return (
		<div className="home">
			<div className="row">
				<div className="col-md-0 col-lg-2 column left">
					<Banner style={{height:500}} banner = {leftBanner} link = {leftBannerlink}/>
				</div>
				<div className="col-md-12 col-lg-8 column">
					<Banner banner = {banner} link = {link}/>
					<Filters data = {filters}/>
					{
						priceRange?(
							<PriceRange
								max = {getMaxPrice(products)}
								min = {getMinPrice(products)}
								onPriceChange = {this.onPriceChange.bind(this)}
								sortLinks = {false}
							/>
						):null
					}
					<ProductGrid
						query = {query}
						user = {user}
					/>
					<BottomText text = {bottomText}/>
				</div>
				<div className="col-md-0 col-lg-2 column right">
					<Banner style={{height:500}} banner = {rightBanner} link = {rightBannerlink}/>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
