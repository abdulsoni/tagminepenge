import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {config} = this.props;
	const footerText = config["footer-text"]?config["footer-text"].value:null;
	return (
		<div className="footer">
			<div className="content">
				
				{
					footerText?(
						<p className="footer-text">{footerText}</p>		
					):null
				}
				<div className="social">
					<ul>
						<li><a className="facebook" href={config.facebook?config.facebook.value:""}><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
						<li><a className="twitter" href={config.twitter?config.twitter.value:""}><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
						<li><a className="pinterest" href={config.pinterest?config.pinterest.value:""}><i className="fa fa-pinterest-square" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="links">
					<ul>
						<li><a href="/about">Om os</a></li>
						<li><a href="/contact">Kontakt os</a></li>
						<li><a href="/privacy-policy">Fortrolighedspolitik</a></li>
					</ul>
				</div>
				<div className="copyright">
					<p>© 2017 Tag Mine Penge, All Rights Reserved.</p>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
