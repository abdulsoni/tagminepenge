import React from 'react';
import styles from "./style.scss";
import Banner from '../../components/banner/index';
import Filters from '../../components/filters/index';
import PriceRange from '../../components/priceRange/index';
import ProductGrid from '../../components/productGrid/index';
var view = function() {
	return (
		<div className="home">
			<Banner/>
			<Filters/>
			<PriceRange/>
			<ProductGrid/>
		</div>
	);
};
export default view;
 
 
