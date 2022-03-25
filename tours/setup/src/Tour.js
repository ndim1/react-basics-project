import React, { useState } from 'react';

const Tour = (props) => {
  const [fullInfo,setFullInfo] = useState(true)
  const {name,info,image,price,removeTour,id} = props
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${ price }</h4>
        </div>
        <p>{fullInfo ? `${info.substring(0, 200)}...` : info}
          <button className='' onClick={()=>{setFullInfo(!fullInfo)}}>{fullInfo ? 'Read More' : 'Show Less'}</button>
        </p>
        <button className='delete-btn' onClick={()=>{removeTour(id)}}>not interested</button>
      </footer>

    </article>
  ) 
};

export default Tour;
 
