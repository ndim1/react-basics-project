import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ info, title }) => {
  const [showInfo,setShowInfo] = useState(false)
  return (
    <article className='question'>
      <header>
        <p>{title}</p>
      </header>
      <button className='btn' onClick={()=>{setShowInfo(prevState => !prevState)}}>{ showInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }</button>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
