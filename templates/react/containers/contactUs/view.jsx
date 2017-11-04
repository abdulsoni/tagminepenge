import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {handleChange,submit,state} = this;
	const {loading,message} = this.state;
	return (
		<div className="container contact-us">
			<div className="form">
				<p className="title">Contact Us</p>
				<form onSubmit={submit.bind(this)}>
					{
						message?(
							<div className={"alert alert-"+message.type}>
								{message.text}
							</div>

						):null
					}
					<div className="form-group">
						<label>Your Name</label>
						<input readOnly={loading} type="text" onChange = {handleChange.bind(this)} value = {this.state.name} name="name"  className="form-control" placeholder="Enter full name" required/>
					</div>
					<div className="form-group">
						<label>Your Email</label>
						<input readOnly={loading} type="email" onChange = {handleChange.bind(this)} value = {this.state.email} name="email" className="form-control" placeholder="Enter email" required/>
					</div>
					<div className="form-group">
						<label>Subject</label>
						<input readOnly={loading} type="text" onChange = {handleChange.bind(this)} value = {this.state.subject} name="subject" className="form-control" placeholder="Subject" required/>
					</div>
					<div className="form-group">
						<label>Your Message</label>
						<textarea readOnly={loading} className="form-control" onChange = {handleChange.bind(this)} value = {this.state.contactMessage} name="contactMessage" placeholder="Enter your message" required/>
					</div>
					<button disabled={loading} type="submit" className="btn btn-yellow pull-right">Submit</button>
				</form>
			</div>
		</div>
	);
};
export default view;
 
 
