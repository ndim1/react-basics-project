import React from 'react';

const List = (props) => {
  const {image,name,age} = props.birthday
  return (
    <>
      <article className='person'>
        <img src={image} alt={name} />
        <div>
          <h4>{ name }</h4>
          <p>{age} years</p>
        </div>
      </article>
     
    </>
  );
};

export default List;
