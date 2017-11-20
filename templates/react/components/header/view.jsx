import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {user, categories} = this.props;
	return (
		<div className="header" ref={(ref) => {
			this.headerRef = ref
		}}>
			<div className="header-top">
				<div className="container content">
					<div className="search">
						<form className="navbar-form" role="search" onSubmit={this.search.bind(this)}>
							<div className="input-group add-on">
								<input value={this.state.searchText} onChange={(e) => {
									this.setState({searchText: e.target.value})
								}} className="form-control" placeholder="Søg" type="text"/>
								<div className="input-group-btn">
									<button className="btn btn-default" type="submit"><i
										className="glyphicon glyphicon-search"></i></button>
								</div>
							</div>
						</form>
					</div>
					<div className="logo">
						<a href="/"><img src="/images/logo.png" alt="logo"/></a>
					</div>
					{
						!user ? (
							<div className="actions">
								<a data-toggle="modal" data-target="#login-modal">Login</a>
								<span> | </span>
								<a data-toggle="modal" data-target="#sign-up-modal">Register</a>
							</div>
						) : (
							<div className="actions">
								<div>
									<a className="nav-link dropdown-toggle" data-toggle="dropdown">
										<span className="icon">
											<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
										</span>
										<span className="text">Min Konto</span>
									</a>
									{
										user.isAdmin ? (
											<a target="blank" className="nav-link" href="/keystone"><span
												className="icon glyphicon glyphicon-home"
												aria-hidden="true"></span><span className="text">Go To Admin</span></a>
										) : null
									}
									<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<a className="dropdown-item" href="/profile">Mine Indstillinger</a>
										<a className="dropdown-item" href="/my-wishlist">Min Ønskeliste</a>
										<a className="dropdown-item" href="/keystone/signout">Log ud</a>
									</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
			<div className="header-nav">
				<div className="nav-accent nav-accent-left"></div>
				<div className="nav-accent nav-accent-right"></div>
				<ul>
					<li className="category-others">
						<a href="/new" className="nav-link">
							<span className="icon"><span className="fa fa-home" aria-hidden="true"></span></span>
							<span className="text">New</span>
						</a>
					</li>
					{
						(categories || []).filter(category => category.displayType == 1).map((category) => {
							return (
								<li key={category._id} className={"desktop category-"+category.key}>
									<a href={"/category/" + category.key} className="nav-link">
										<span className="icon"><span className={category.iconClass}
																	 aria-hidden="true"></span></span>
										<span className="text">{category.name}</span>
									</a>
								</li>
							)
						})
					}
					<li className="mobile">
						<a href="/" className="nav-link">
							<span className="icon"><span className="glyphicon glyphicon-search"
														 aria-hidden="true"></span></span>
							<span className="text">Search</span>
						</a>
					</li>
					<li className="mobile">
						<a href="/" className="nav-link">
							<span className="icon"><span className="glyphicon glyphicon-heart-empty"
														 aria-hidden="true"></span></span>
							<span className="text">Wish List</span>
						</a>
					</li>
					<li>
						<a href="/category/gadgets" className="nav-link dropdown-toggle category-others">
							<span className="icon">
								<span className="fa fa-gift" aria-hidden="true"></span>
							</span>
							<span className="text">Ting Til Hjemmet</span>
						</a>
						{/*<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">*/}
							{/*{*/}
								{/*(categories || []).filter(category => category.displayType == 2).map((category) => {*/}
									{/*return (*/}
										{/*<a href={"/category/" + category.key} key={category._id}*/}
										   {/*className="dropdown-item">{category.name}</a>*/}
									{/*)*/}
								{/*})*/}
							{/*}*/}
							{/*<div className="dropdown-divider"></div>*/}
							{/*/!*<a className="dropdown-item" href="/get-started">Submit A Product</a>*!/*/}
							{/*<a className="dropdown-item" href="/contact">Kontakt os</a>*/}
						{/*</div>*/}
					</li>
				</ul>
			</div>
		</div>
	);
};
export default view;
