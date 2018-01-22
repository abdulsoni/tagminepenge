import React from 'react';
import styles from "./style.scss";
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
} from 'react-share';
import {getPlainText,getBackgroundImageStyle} from '../../utils/common'
var view = function() {
	const {data,user} = this.props;
	
	const {_id} = data;
	let id=_id;
	let imageUrl = null;
	if(data.image){
		imageUrl = data.image.url;
	}
	let title=data.title.split(" ").join("-");
	let text="<p>"+data.content.brief+"</p>";
	let ShareText = title.concat(text);
	console.log(ShareText);
	const presentInWishList = this.presentInWishList();
	 const productLink = window.location.protocol+"//"+window.location.host+"/produkt/"+_id+"/"+data.title.split(" ").join("-");
	const facebookProductLink = "http://www.tagminepenge.dk/produkt/"+id+"/"+title;
	const FacebookIcon = generateShareIcon('facebook');
	const TwitterIcon = generateShareIcon('twitter');
	const PinterestIcon = generateShareIcon('pinterest');
	const VKIcon = generateShareIcon('vk');
	const {FacebookShareButton,TwitterShareButton,PinterestShareButton,VKShareButton} = ShareButtons;
	var divStyle = {
		fontSize:'15px',
	  fontFamily:'open sans condensed',
	  texttransform:'uppercase'
	};
	console.log(productLink);
	var IconStyle={
		'width':'130px',
	'marginRight': '7px',
	'paddingTop':'3px'
	};
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
					<a  href={data.link} target="_blank"  className="checkout-btn">
						<button className="btn btn-yellow checkout" style={divStyle}>Tjek det ud</button>
					</a>
					<div className="share" >
						<div className="row" style={IconStyle}>
				            <div className="col-sm-3">
								<FacebookShareButton url={facebookProductLink} title={data.title} description={getPlainText(data.content.brief)} media={imageUrl}>
									<FacebookIcon size={25} round={false} />
								</FacebookShareButton>
							</div>
							<div className="col-sm-3">
								<TwitterShareButton url={facebookProductLink} title={data.title} via={getPlainText(data.content.brief)} image={imageUrl}>
									<TwitterIcon size={25} round={false} />
								</TwitterShareButton>
							</div>
							<div className="col-sm-3">
								<PinterestShareButton url={facebookProductLink}  description={getPlainText(data.content.brief)} media={imageUrl}>
									<PinterestIcon size={25} round={false} />
								</PinterestShareButton>
							</div>
							<div className="col-sm-3">
								{/*<VKShareButton url={facebookProductLink} quote={ShareText} quote={getPlainText(data.content.brief)} image={imageUrl}>*/}
									{/*<VKIcon size={25} round={false} />*/}
								{/*</VKShareButton>*/}
								<div className="addthis_inline_share_toolbox">
								</div>
							</div>
						</div>
						
						{/*<div className="addthis_inline_share_toolbox" data-url = {productLink} data-title={data.title} data-description={getPlainText(data.content.brief)} data-media={imageUrl} onClick={this.changeprop.bind(this,productLink)}*/}
						{/*/>*/}
						{/*<div className="addthis_inline_share_toolbox">*/}
							{/*<a className="addthis_button_facebook"*/}
							   {/*data-url = {productLink} data-title={data.title} data-description={getPlainText(data.content.brief)} data-media={imageUrl} >*/}
								{/*<i className="ico ico-facebook"></i>*/}
							{/*</a>*/}
						{/*</div>*/}
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
