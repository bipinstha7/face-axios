import React from 'react';

 const Rank =({name, entries}) => {
  return (
    <div className="container mt-5">
      <p className="lead">
      {`${name}, your current rank is: ${entries}`}
      </p>
    </div>
  )
}

export default Rank;