import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  
  const checkNumber = (number) => {
    if (number > people.length - 1) { //ako brojot e pogolem od 3 da vraka 0
      return 0;
    }
    if (number < 0) { // ako brojot e pomal od 0 da vraka 3 
      return people.length - 1
    }
    return number
  }

  const prev = () => { 
    setIndex(() => {
      let newNumber = index - 1 
      return checkNumber(newNumber)
    })

  }
  const next = () => {
      setIndex(() => {
      let newNumber = index + 1 
      return checkNumber(newNumber)
    })
  }
  const random = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    } 
    setIndex(checkNumber(randomNumber))

  }
  return (
   <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={random}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
