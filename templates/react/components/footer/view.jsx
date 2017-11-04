import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {config,categories} = this.props;
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="title">
							<p>By Recipient</p>
						</div>
						<div className="links">
							<ul>
								{
									(categories || []).filter(category=>category.footerDisplayType==1).map((category)=>{
										return (
											<li key = {category._id}><a href="/">{category.name}</a></li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="title">
							<p>Affordable Gift Ideas</p>
						</div>
						<div className="links">
							<ul>
								{
									(categories || []).filter(category=>category.footerDisplayType==2).map((category)=>{
										return (
											<li key = {category._id}><a href="/">{category.name}</a></li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="title">
							<p>Helpful Links</p>
						</div>
						<div className="links">
							<ul>
								<li><a href="/contact">Contact us</a></li>
								<li><a href="/about">About us</a></li>
								<li><a href="/submit-product">Submit a product</a></li>
								<li><a href="/privacy-policy">Privacy Policy</a></li>
								{/*<li><a>Blog</a></li>*/}
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="title">
							<p>Follow TagMinePenge</p>
						</div>
						<div className="links">
							<ul>
								<li><a href={config.facebook?config.facebook.value:""}>Facebook</a></li>
								<li><a href={config.twitter?config.twitter.value:""}>Twitter</a></li>
								<li><a href={config.tumbler?config.tumbler.value:""}>Tumblr</a></li>
								<li><a href={config.pinterest?config.pinterest.value:""}>Pinterest</a></li>
								<li><a href={config.rss?config.rss.value:""}>RSS</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
