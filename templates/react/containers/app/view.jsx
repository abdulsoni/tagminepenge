import React from 'react';
import Header from '../../components/header/index';
import LoginModal from '../login';
import SignUpModal from '../../components/signUp/index';
import Footer from '../../components/footer/index';
import styles from "./style.scss";

var view = function () {
	const {routeInfo,navLinks} = this.props;
	return (
		<div className="app">
			<div className="main-container">
				<Header navLinks = {navLinks}/>
				{
					<routeInfo.component/>
				}
				<Footer/>
				<LoginModal/>
				<SignUpModal/>
			</div>
		</div>
	);
};
export default view;
