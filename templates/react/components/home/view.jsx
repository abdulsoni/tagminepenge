import React from 'react';
import styles from "./style.scss";
import Banner from '../../components/banner';
import Filters from '../../components/filters';
import PriceRange from '../../components/PriceRange';
import ProductGrid from '../../components/productGrid';
import Footer from '../../components/footer';
var view = function() {
	return (
		<div className="home">
			<Banner/>
			<Filters/>
			<PriceRange/>
			<ProductGrid/>
			<Footer/>
		</div>
	);
};
export default view;
 
 
