import React from 'react';
import Header from '../../components/header';
import Home from '../../components/home';
import styles from "./style.scss";
var view = function () {
	return (
		<div className="app">
			<Header/>
			<Home/>
		</div>
	);
};
export default view;
