import React from 'react';
import styles from "./style.scss";

var view = function () {
	return (
		<div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="false">
			<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
				<span className="glyphicon glyphicon-chevron-left"></span>
			</a>
			<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
				<span className="glyphicon glyphicon-chevron-right"></span>
			</a>
			<div className="carousel-inner">
				<div className="item active">
					<img src="https://s28.postimg.org/4237b0cjh/image.jpg" alt="1.jpg" className="img-responsive"/>
					<div className="carousel-caption">
						<p> 1.jpg </p>
					</div>
				</div>
				<div className="item">
					<img src="https://s29.postimg.org/xaf064313/image.jpg" alt="2.jpg" className="img-responsive"/>
					<div className="carousel-caption">
						<p> 2.jpg </p>
					</div>
				</div>
				<div className="item">
					<img src="https://s17.postimg.org/sv1x15jlb/image.jpg" alt="3.jpg" className="img-responsive"/>
					<div className="carousel-caption">
						<p> 3.jpg </p>
					</div>
				</div>
				<div className="item">
					<img src="https://s7.postimg.org/4z602gd8b/image.jpg" alt="4.jpg" className="img-responsive"/>
					<div className="carousel-caption">
						<p> 4.jpg </p>
					</div>
				</div>
			</div>
			<ul className="carousel-indicators">
				<li data-target="#carousel-example-generic" data-slide-to="0" className="active">
					<img src="https://s2.postimg.org/h6uti3zud/1_tn.jpg" alt="1_tn.jpg"/>
				</li>
				<li data-target="#carousel-example-generic" data-slide-to="1">
					<img src="https://s27.postimg.org/n4fjr7q2n/2_tn.jpg" alt="1_tn.jpg"/>
				</li>
				<li data-target="#carousel-example-generic" data-slide-to="2">
					<img src="https://s29.postimg.org/afuhmf61f/3_tn.jpg" alt="1_tn.jpg"/>
				</li>
				<li data-target="#carousel-example-generic" data-slide-to="3">
					<img src="https://s29.postimg.org/p45dxi6hf/4_tn.jpg" alt="1_tn.jpg"/>
				</li>
			</ul>
		</div>
	);
};
export default view;
 
 
