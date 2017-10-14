import React from 'react';
import Header from '../../components/header';
import Home from '../../components/home';
import ProductGroup from '../../components/productGroup';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="app">
			<div className="main-container">
				<Header/>
				<ProductGroup/>
			</div>
		</div>
	);
};
export default view;
