import React from 'react';


const Letter = ({value}) => {
  return(
    <div>
    <div className="letter-tile">
      {value}
    </div>
    <div className="letter-underline">
      {value}
    </div>
    </div>
  )
}


export default Letter
