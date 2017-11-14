import React from 'react';
import styles from './style.scss';
import ImagePicker from '../../../components/image-picker';
var view = function () {
	const {handleChange, submit, state} = this;
	const {config} = this.props;
	const {loading, message, fileUrl,file} = this.state;
	return (
		<div className="step step-two">
			<div className="container">
				<img src="/images/step2.png" alt="step"/>
				<div className="row form">
					<div className="col-md-6">
						<form onSubmit={submit.bind(this)}>
							{
								message ? (
									<div className={"alert alert-" + message.type}>
										{message.text}
									</div>

								) : null
							}
							<div className="form-group">
								<label>Product Title <span className="length">(max 40 characters)</span></label>
								<input readOnly={loading}
									   type="text"
									   onChange={handleChange.bind(this)}
									   value={this.state.productTitle}
									   name="productTitle"
									   className="form-control"
									   required
								/>
							</div>
							<div className="form-group">
								<label>Product Description <span className="length">(max 250 characters)</span></label>
								<textarea readOnly={loading}
										  className="form-control"
										  onChange={handleChange.bind(this)}
										  value={this.state.productDescription}
										  name="productDescription"
										  required
								/>
							</div>
							<div className="form-group">
								<label>Link</label>
								<input readOnly={loading}
									   type="text"
									   onChange={handleChange.bind(this)}
									   value={this.state.link}
									   name="link"
									   className="form-control"
									   required
								/>
							</div>
							<div className="form-group">
								<label>Price</label>
								<input readOnly={loading}
									   type="number"
									   onChange={handleChange.bind(this)}
									   value={this.state.price}
									   name="price"
									   className="form-control"
									   required
								/>
							</div>
							<div className="form-group">
								<label>Image Upload</label>
								<ImagePicker
									file={file}
									fileUrl={fileUrl}
									accept="video/mp4,video/x-m4v,image/*,video/*"
									crop={true}
									cropWidth={'100%'}
									cropHeight={332}
									onFileChange={this.onFileChange.bind(this)}
									onSave={this.onFileChange.bind(this)}>
									{
										fileUrl ? (
											<div className="cropped-img">
												<img src={fileUrl}/>
											</div>
										) : (
											<div className="upload-btn">
												<input type="file" name="file" />
											</div>
										)
									}
								</ImagePicker>
							</div>
							<button disabled={loading} type="submit" className="btn btn-yellow pull-right">Save and
								Continue
							</button>
						</form>
					</div>
					<div className="col-md-6">
						
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
