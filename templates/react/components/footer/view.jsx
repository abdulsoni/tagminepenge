import React from 'react';
import styles from "./style.scss";

var view = function () {
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
								<li><a>Contact us</a></li>
								<li><a>About us</a></li>
								<li><a>Submit a product</a></li>
								<li><a>Privacy Policy</a></li>
								<li><a>Blog</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3">
						<div className="title">
							<p>Follow TagMinePenge</p>
						</div>
						<div className="links">
							<ul>
								<li><a>Facebook</a></li>
								<li><a>Twitter</a></li>
								<li><a>Tumblr</a></li>
								<li><a>Pinterest</a></li>
								<li><a>RSS</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
