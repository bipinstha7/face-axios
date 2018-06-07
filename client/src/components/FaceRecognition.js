import React from 'react';

 const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className="container mt-2 imageDiv">
      <img id="inputImage" src={imageUrl} alt="detected result" width="500px" height="500px" />
      <div 
        className="bounding-box" 
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol
        }}>
      </div>
    </div>
  )
}

export default FaceRecognition;