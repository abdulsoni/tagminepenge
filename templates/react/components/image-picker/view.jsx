import React from 'react';
import './styles.scss';
import Upload from '../../components/upload';
import ReactCropper from 'react-cropper';
import CropIcon from './assets/crop.png';

var view = function () {
  let {children, cropHeight, cropWidth, aspectRatio, crop} = this.props;
  cropWidth = cropWidth || '100%';
  cropHeight = cropHeight || '100%';
  aspectRatio = aspectRatio || 1;
  const {fileUrl, enableCrop} = this.state;
  /**
   * logic -
   * crop property is used to enable cropper.
   * enableCrop is used to start and stop cropping
   * fileUrl - File Selected
   * 5 cases -
   * 1. Crop enabled = File not selected, crop started and crop not started
   * 2. Crop Disabled = File Selected and File not selected
   */

  if (fileUrl) {
    if (crop) {
      return (
        <div className="cropping-box">
          {
            enableCrop ? (
              <ReactCropper
                ref='cropper'
                src={fileUrl}
                style={{height: cropHeight, width: cropWidth}}
                // Cropper.js options
                aspectRatio={aspectRatio}
                cropBoxResizable = {false}
                guides={false}
                checkOrientation = {true}
                rotatable = {true}
                scalable = {true}
              />
            ) : (
              <div style={{width: cropWidth, height: cropHeight, display: 'flex'}}>
                <img src={fileUrl}/>
              </div>
            )
          }

          {
            enableCrop ? (
              <div className="cropping-actions">
                <Upload {...this.getUploadProps()}>
                    <button>upload</button>
                </Upload>
                  <button onClick={this.save.bind(this)} className="save-btn">Save</button>
                  <button onClick={this.cancelCrop.bind(this)} type="danger">Cancel</button>
              </div>
            ) : (
              <div className="cropping-actions">
                <Upload {...this.getUploadProps()}>
                    <button><Icon type="upload"/></button>
                </Upload>
				  <button onClick={this.startCrop.bind(this)} type="default"><img src={CropIcon} alt="crop"/></button>
              </div>
            )
          }

        </div>
      )
    }
  }
  return (
    <div className="image-picker-upload-btn">
      <Upload {...this.getUploadProps()}>
        {children}
      </Upload>
    </div>
  );

}
export default view;
