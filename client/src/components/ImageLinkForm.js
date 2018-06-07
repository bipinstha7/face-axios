import React from "react";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="pt-2 container">
      <p>
        {"This will detect your brain"}
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              onChange = {onInputChange}
            />
            <button 
              className="btn btn-primary btn-block mt-2"
              onClick={onButtonSubmit}  
            >Detect</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;