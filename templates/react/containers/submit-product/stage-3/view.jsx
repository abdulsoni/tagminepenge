import React from 'react';
import styles from "./style.scss";
import {isNumeric} from '../../../utils/common';
var view = function () {
	return (
		<div className="container contact-us">
			<div className="form">
				<p className="title">Submit a Product</p>
				<form>
					<div className="form-group">
						<label>Product Title <span className="prefix">(max 40 characters)</span></label>
						<input type="text" className="form-control" placeholder="Enter your title" required/>
					</div>
					<div className="form-group">
						<label>Product Description <span className="prefix">(max 250 characters)</span></label>
						<textarea className="form-control" name="description"  rows="5" placeholder="Write your description here, it can be up to 250 characters to describe your product."></textarea>
					</div>
					<div className="form-group">
						<label>Link</label>
						<input type="text" className="form-control" placeholder="http://www.mywebstore.com" required/>
					</div>
					<div className="form-group">
						<label>Price</label>
						<input onKeyPress={isNumeric} type="text" className="form-control" placeholder="19.99" required/>
					</div>
					<button type="submit" className="btn btn-yellow pull-right">Submit</button>
				</form>
			</div>
		</div>
	);
};
export default view;
 
 
