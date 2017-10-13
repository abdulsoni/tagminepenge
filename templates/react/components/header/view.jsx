import React from 'react';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="header">
			<div className="header-top">
				<div className="container content">
					<div className="search">
						<form className="navbar-form" role="search">
							<div className="input-group add-on">
								<input className="form-control" placeholder="Search" type="text"/>
								<div className="input-group-btn">
									<button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
								</div>
							</div>
						</form>
					</div>
					<div className="logo">
						<img src="/images/logo.png" alt="logo"/>
					</div>
					<div className="actions">
						<a>Login</a>
						<span> | </span>
						<a>Register</a>
					</div>
				</div>
			</div>
			<div className="header-nav">
				<div className="nav-accent nav-accent-left"></div>
				<div className="nav-accent nav-accent-right"></div>
				<ul>
					<li>
						<a className="nav-link">
							<span className="icon"><span className="glyphicon glyphicon-home" aria-hidden="true"></span></span>
							<span className="text">New</span>
						</a>
					</li>
					<li>
						<a className="nav-link">
							<span className="icon"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span></span>
							<span className="text">Gadgets</span>
						</a>
					</li>
					<li>
						<a className="nav-link">
							<span className="icon"><span className="glyphicon glyphicon-globe" aria-hidden="true"></span></span>
							<span className="text">Experiences</span>
						</a>
					</li>
					<li>
						<a className="nav-link">
							<span className="icon"><span className="glyphicon glyphicon-fire" aria-hidden="true"></span></span>
							<span className="text">Food & Drink</span>
						</a>
					</li>
					<li>
						<a className="nav-link">
							<span className="icon"><span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></span>
							<span className="text">Others</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default view;
