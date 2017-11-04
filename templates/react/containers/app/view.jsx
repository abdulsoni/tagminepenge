import React from 'react';
import Header from '../../components/header/index';
import LoginModal from '../login';
import SignUpModal from '../signUp/index';
import ForgotModal from '../forgot/index';
import Footer from '../../components/footer/index';
import styles from "./style.scss";

var view = function () {
	const {routeInfo,navLinks,user,config,categories} = this.props;
	return (
		<div className="app">
			<div className="main-container">
				<Header navLinks = {navLinks} user = {user} categories = {categories}/>
				{
					<routeInfo.component  user = {user} config = {config}/>
				}
				<Footer config = {config}/>
				<LoginModal/>
				<SignUpModal/>
				<ForgotModal/>
			</div>
		</div>
	);
};
export default view;
