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
						<a data-toggle="modal" data-target="#login-modal">Login</a>
						<span> | </span>
						<a data-toggle="modal" data-target="#sign-up-modal">Register</a>
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
						<a className="nav-link dropdown-toggle" data-toggle="dropdown">
							<span className="icon">
								<span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
							</span>
							<span className="text">Others</span>
						</a>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<a className="dropdown-item" href="#">Home & Office Gifts</a>
							<a className="dropdown-item" href="#">Wearables</a>
							<a className="dropdown-item" href="#">Gifts For Kids</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Submit A Product</a>
							<a className="dropdown-item" href="#">Contact Us</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default view;
