import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {handleChange,submit,state} = this;
	const {loading,message} = this.state;
	return (
		<div id="sign-up-modal" className="modal fade join" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h2 className="modal-title">Create Account</h2>
					</div>
					<div className="modal-body">
						<form onSubmit={submit.bind(this)}>
							{
								message?(
									<div className={"alert alert-"+message.type}>
										{message.text}
									</div>

								):null
							}
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input readOnly={loading} onChange = {handleChange.bind(this)} name="email" value = {this.state.email} type="email" className="form-control" id="exampleInputEmail1"
									   aria-describedby="emailHelp" placeholder="Enter email" required/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input readOnly={loading}  onChange = {handleChange.bind(this)} name="password" value = {this.state.password} type="password" className="form-control" id="exampleInputPassword1"
									   placeholder="Password" required/>
							</div>
							<div className="actions">
								<div className="secondary-action">
									<span>By signing up you agree to our <a className="inline-block">Terms and Policies</a></span>
								</div>
								<button type="submit" className="btn btn-yellow submit-btn">Gem</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
