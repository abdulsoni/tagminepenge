import React from 'react';
import styles from "./style.scss";
import Banner from '../../components/banner/index';
import Filters from '../../components/filters/index';
import PriceRange from '../../components/priceRange/index';
import ProductGrid from '../../components/productGrid/index';
var view = function() {
	const {config} = this.props;
	const banner = (config.banner && config.banner.media)?config.banner.media.url:null;
	return (
		<div className="home">
			<div className="row">
				<div className="col-md-0 col-lg-2 column left">
					<Banner/>
				</div>
				<div className="col-md-12 col-lg-8 column">
					<Banner banner = {banner}/>
					<Filters/>
					<PriceRange/>
					<ProductGrid/>
				</div>
				<div className="col-md-0 col-lg-2 column right">
					<Banner/>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
