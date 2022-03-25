import React from 'react'
import moment from 'moment' // https://momentjs.com/ direction to how to manipulate with moment date time itn.
const Article = ({title,date,length,snippet}) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{ moment(date).format('MMMM Do YYYY') }</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
