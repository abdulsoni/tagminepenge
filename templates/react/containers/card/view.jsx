import React from 'react';
import styles from "./style.scss";
import {getPlainText,getBackgroundImageStyle} from '../../utils/common'
var view = function() {
	const {data,user} = this.props;
	const {_id} = data;
	let imageUrl = null;
	if(data.image){
		imageUrl = data.image.url;
	}
	const presentInWishList = this.presentInWishList();
	const productLink = window.location.protocol+"//"+window.location.host+"/product/"+_id+"/"+data.title.split(" ").join("-");
	return (
		<div className="card">
			<div className="card-header">
				<a href={productLink} className="product-title">{data.title}</a>
			</div>
			<div className="card-body">
				<div className="product-image">
					<a target="blank" href={data.link}><span style = {getBackgroundImageStyle(imageUrl)} className="image"></span></a>
					{
						user?(
							<button onClick={this.addToWishList.bind(this)} className="btn btn-yellow save-btn">{!presentInWishList?"GEM":"Fjern"}</button>
						):(
							<a data-toggle="modal" data-target="#login-modal">
								<button className="btn btn-yellow save-btn">GEM</button>
							</a>
						)
					}
				</div>
				<div className="product-text">
					<p className="text">{getPlainText(data.content.brief)}</p>
				</div>
			</div>
			<div className="card-footer">
				<div className="product-range">
					<p className="cost">{data.price?data.price + " kr.":""}</p>
					<span className="saves">
						{
							user?(
								<a className="icon" onClick={this.addToWishList.bind(this)}><i className={!presentInWishList?"glyphicon glyphicon-heart-empty":"glyphicon glyphicon-heart"}></i> </a>
							):(
								<a className="icon" data-toggle="modal" data-target="#login-modal"><i className="glyphicon glyphicon-heart-empty"></i> </a>
							)
						}
						<span className="count">{data.saves || 0}</span>
						<span> Gemte</span>
					</span>
				</div>
				<div className="product-action">
					<a target="blank" href={data.link} className="checkout-btn">
						<button className="btn btn-yellow checkout">Tjek det ud</button>
					</a>
					{/*<div className="share">*/}
						{/*<div className="addthis_inline_share_toolbox" data-url = {productLink} data-title={data.title} data-description={getPlainText(data.content.brief)}*/}
							 {/*data-media={imageUrl}/></div>*/}
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
