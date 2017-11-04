import React from 'react';
import styles from "./style.scss";

var view = function () {
	return (
		<div className="container contact-us">
			<div className="form">
				<p className="title">Submit a Product</p>
				<form>
					<div className="form-group">
						<label>Your Name</label>
						<input type="text" className="form-control" placeholder="Enter full name" required/>
					</div>
					<div className="form-group">
						<label>Your Email</label>
						<input type="email" className="form-control" placeholder="Enter email" required/>
					</div>
					<div className="form-group">
						<label>Subject</label>
						<input type="text" className="form-control" placeholder="Subject" required/>
					</div>
					<div className="form-group">
						<label>Your Message</label>
						<textarea className="form-control" placeholder="Enter your message" required/>
					</div>
					<button type="submit" className="btn btn-yellow pull-right">Submit</button>
				</form>
			</div>
		</div>
	);
};
export default view;
 
 
