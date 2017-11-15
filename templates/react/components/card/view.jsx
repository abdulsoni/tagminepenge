import React from 'react';
import styles from "./style.scss";
import {getPlainText,getBackgroundImageStyle} from '../../utils/common'
var view = function() {
	const {data} = this.props;
	const {_id} = data;
	let imageUrl = null;
	if(data.image){
		imageUrl = data.image.url;
	}
	const productLink = window.location.protocol+"//"+window.location.host+"/product/"+_id+"/"+data.title.split(" ").join("-");
	return (
		<div className="card">
			<div className="card-header">
				<a href={productLink} className="product-title">{data.title}</a>
			</div>
			<div className="card-body">
				<div className="product-image">
					<a target="blank" href={productLink}><span style = {getBackgroundImageStyle(imageUrl)} className="image"></span></a>
					<button className="btn btn-red save-btn">Save</button>
				</div>
				<div className="product-text">
					<p className="text">{getPlainText(data.content.brief)}</p>
				</div>
			</div>
			<div className="card-footer">
				<div className="product-range">
					<p className="cost">${data.price || 0}</p>
					<span className="saves">
						<a className="icon" onClick={this.addToWishList.bind(this)}><i className="glyphicon glyphicon-heart-empty"></i> </a>
						<span className="count">{data.saves || 0}</span>
						<span> saves</span>
					</span>
				</div>
				<div className="product-action">
					<a target="blank" href={data.link}>
						<button className="btn btn-yellow">Check it out</button>
					</a>
					<div className="share">
						{/*<ul>*/}
							{/*<li>*/}
								{/*<a className="facebook"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>*/}
							{/*</li>*/}
							{/*<li>*/}
								{/*<a className="twitter"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>*/}
							{/*</li>*/}
							{/*<li>*/}
								{/*<a className="pinterest"><i className="fa fa-pinterest-square" aria-hidden="true"></i></a>*/}
							{/*</li>*/}
						{/*</ul>*/}
						<div 
							data-url = {productLink} data-title={data.title} data-description={getPlainText(data.content.brief)}
							 data-media={imageUrl} className="addthis_inline_share_toolbox"/>
							
						
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
