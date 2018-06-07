import React from 'react';

 const FaceRecognition = ({imageUrl}) => {
  return (
    <div className="container mt-2">
      <img src={imageUrl} alt="detected result" width="500px" height="auto" />
    </div>
  )
}

export default FaceRecognition;