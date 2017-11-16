import React from 'react';
import Header from '../../components/header/index';
import LoginModal from '../login';
import SignUpModal from '../signUp/index';
import ForgotModal from '../forgot/index';
import Footer from '../../components/footer/index';
import styles from "./style.scss";

var view = function () {
	const {routeInfo, navLinks, user, config, categories, filters} = this.props;
	return (
		<div className="app">
			<div className="main-container">
				<Header navLinks={navLinks} user={user} categories={categories}/>
				{
					<routeInfo.component categories={categories} {...routeInfo.routeProps} filters={filters} user={user}
										 config={config}/>
				}
				<Footer config={config} categories={categories}/>
				<LoginModal/>
				<SignUpModal/>
				<ForgotModal/>
				<a href="/contact" className="contact-us-btn"><span
					className="icon glyphicon glyphicon-earphone"
					aria-hidden="true"></span> CONTACT US</a>
			</div>
		</div>
	);
};
export default view;
