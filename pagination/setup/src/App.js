import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page,setPage] = useState(0)
  const [folowers,setFollowers] = useState([])

  useEffect(() => {
    if(loading)return // tuka if loading prvo zosto dodeka ne se izvrsi rpevzemanjeto na data ke vraka error ili undefined 
    setFollowers(data[page])
  }, [data, page,loading])

  const handleButton = (index) => {
    setPage(index)
  }
  const prevPage = () => {
    setPage((prevPage) => {
      let number = prevPage - 1
      if (number < 0) {
        number = data.length - 1
      }
      return number
    })
  }
  const nextPage = () => {
    setPage(prevPage => {
      let number = prevPage + 1
      if (number > data.length - 1) {
        number = 0
      }
      return number
    })
  }
  
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {folowers.map(item => { return <Follower key={item.id} {...item} /> })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handleButton(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
