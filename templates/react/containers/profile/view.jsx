import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {handleChange, submit, state} = this;
	const {loading, message} = this.state;
	return (
		<div className="profile">
			<div className="form container">
				<p className="title">My Account</p>
				<p className="direction">Here you can update your details</p>
				<form onSubmit={submit.bind(this)}>
					{
						message ? (
							<div className={"alert alert-" + message.type}>
								{message.text}
							</div>

						) : null
					}
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Change Email Address</label>
						<input readOnly={loading}
							   onChange={handleChange.bind(this)}
							   name="email"
							   value={this.state.email}
							   type="email"
							   className="form-control"
							   id="exampleInputEmail1"
							   aria-describedby="emailHelp"
							   placeholder="Enter email"
							   maxLength="50"
							   required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Choose new Password</label>
						<input readOnly={loading}
							   onChange={handleChange.bind(this)}
							   name="password"
							   value={this.state.password}
							   type="password"
							   className="form-control"
							   id="exampleInputPassword1"
							   placeholder="Password"
							   maxLength="20"
						/>
					</div>
					<div className="actions">
						<button type="submit" className="btn btn-yellow submit-btn">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default view;
 
 
