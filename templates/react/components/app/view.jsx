import React from 'react';
import Header from '../../components/header';
import Home from '../../components/home';
import ProductGroup from '../../components/productGroup';
import ProductPage from '../../components/productPage';
import WishList from '../../components/wishlist';
import Profile from '../../components/profile';
import AboutUs from '../../components/aboutUs';
import ContactUs from '../../components/contactUs';
import LoginModal from '../../components/login';
import SignUpModal from '../../components/signUp';
import Footer from '../../components/footer';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="app">
			<div className="main-container">
				<Header/>
				<WishList/>
				<Footer/>
				<LoginModal/>
				<SignUpModal/>
			</div>
		</div>
	);
};
export default view;
