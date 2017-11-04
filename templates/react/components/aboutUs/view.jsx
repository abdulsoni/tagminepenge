import React from 'react';
import styles from "./style.scss";
import Banner from '../../components/banner';
import {getBackgroundImageStyle} from '../../utils/common';
import {getImage} from '../../utils/app-util';
var view = function() {
	const {config} = this.props;
	const banner = config["about-us-banner"];
	const image1 = config["about-us-image-1"];
	const image2 = config["about-us-image-2"];
	const text = config["about-us-text"];
	const text2 = config["about-us-text-2"];
	return (
		<div className="about-us">
			<Banner banner = {getImage(banner)}/>
			<div className="container details">
				<div className="row one">
					<div className="col-md-5">
						<div className="image-box">
							<span className="image" style={{backgroundImage:getBackgroundImageStyle(getImage(image1))}}></span>
						</div>
					</div>
					<div className="col-md-7">
						<div className="text">
							<p>{text?text.description:null}</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-7">
						<div className="text">
							<p>{text2?text2.description:null}</p>
						</div>
					</div>
					<div className="col-md-5">
						<div className="image-box">
							<span className="image" style={{backgroundImage:getBackgroundImageStyle(getImage(image2))}}></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
