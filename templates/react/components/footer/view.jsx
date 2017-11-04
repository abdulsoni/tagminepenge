import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {config} = this.props;
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
								<li><a>Gifts for Men</a></li>
								<li><a>Gifts for Women</a></li>
								<li><a>Gifts for Kids</a></li>
								<li><a>Gifts for Animal Lovers</a></li>
								<li><a>Gifts for Couples</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="title">
							<p>Affordable Gift Ideas</p>
						</div>
						<div className="links">
							<ul>
								<li><a>Gifts under $50</a></li>
								<li><a>Gifts under $40</a></li>
								<li><a>Gifts under $30</a></li>
								<li><a>Gifts under $20</a></li>
								<li><a>Gifts under $10</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="title">
							<p>Helpful Links</p>
						</div>
						<div className="links">
							<ul>
								<li href="/contact"><a>Contact us</a></li>
								<li><a href="/about">About us</a></li>
								<li href="/submit-product"><a>Submit a product</a></li>
								<li href="/privacy-policy"><a>Privacy Policy</a></li>
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
 
 
