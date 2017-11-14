import React, { Component } from 'react';
import ComponentView  from './view';
import {blobToBlobURL} from '../../utils/file'
export default class Main extends Component {
  /**
   * Constructor
   * @param props
   */
  constructor(props){
    super(props);
    this.initialState = {
      file : props.file?props.file:null ,
      fileUrl : props.fileUrl?props.fileUrl:null,
      enableCrop : false
    };
    this.state  = this.initialState;
  }

  /**
   * Get Upload Props
   */
  getUploadProps(){
    const {multiple,accept} = this.props;
    return {
      onRemove : this.onRemove.bind(this),
      beforeUpload : this.beforeUpload.bind(this),
      multiple : multiple && true,
      accept : accept || "image/*"
    }
  }

  /**
   * On Remove of file
   * @param file
   */
  onRemove(file){

  }

  /**
   * Before Upload of file
   * @param file
   * @returns {boolean}
   */
  beforeUpload(file){
    const {onFileChange} = this.props;
    const fileUrl = blobToBlobURL(file)
    this.setState({
      file,
      fileUrl
    },()=>{
      // Save Initial Image
      onFileChange?onFileChange(file):null
    });
    return false;
  }


  /**
   * On Cancel
   */
  cancelCrop(){
    this.setState({
      enableCrop : false,
      fileUrl : blobToBlobURL(this.state.file)
    })
  }
  /**
   * On Start Crop
   */
  startCrop(){
    this.setState({
      enableCrop : true,
      fileUrl : blobToBlobURL(this.state.file)
    })
  }
  /**
   * Save Cropped Image
   */
  save(){
    const {onSave,closeAfterSave} = this.props;
    if(onSave){
      if(this.state.enableCrop){
        this.refs.cropper.getCroppedCanvas().toBlob((blob)=>{
          this.setState({
            enableCrop : false,//uncomment if we want to disable cropping after save
            fileUrl : blobToBlobURL(blob)
          },()=>{
            onSave(blob);
            if(closeAfterSave){
              this.close();
            }
          })
        });
      } else {
        onSave(this.state.file)
        this.close();
      }
    }

  }
  close(){
    this.setState(this.initialState)
  }

  /**
   * Render
   * @returns {*}
   */
  render() {
    return (ComponentView.bind(this))();
  }
}
Main.displayName="Image-Picker"
