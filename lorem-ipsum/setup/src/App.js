import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text,setText] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()
    let amount = count
    if (amount <= 0) {
      amount = 1
    }
    if (amount > 8) {
      amount = 8
    }
    setText(data.slice(0,amount))
  }
  return (
    <section className='section-center'>
      <form className='lorem-form' onSubmit={submitHandler}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input type='number' value={count} onChange={(e) => { setCount(e.target.value) }} />
        <button className='btn' type='submit'>submit</button>
      </form>
      <article className='lorem-text'>
        {text.map((t, index) => {
          return <p key={index}>{ t }</p>
        })}
      </article>
    </section>
    
    )
}

export default App;
