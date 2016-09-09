import React from 'react';

class UploadButton extends React.Component {
  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS,
      (error, results) => {
      if(!error){
        this.props.postImage(results[0]);
      }
    });
  }

  render() {
    return (
      <div className="upload-form">
        <div onClick={ this.upload.bind(this) }>Upload new image!</div>
      </div>
    );
  }
}

export default UploadButton;
