import React from 'react';
import Header from '../../components/header';
import Home from '../../components/home';
import ProductGroup from '../../components/productGroup';
import ProductPage from '../../components/productPage';
import Footer from '../../components/footer';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="app">
			<div className="main-container">
				<Header/>
				<ProductPage/>
				<Footer/>
			</div>
		</div>
	);
};
export default view;
