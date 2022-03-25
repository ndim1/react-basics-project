import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  
  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPeople(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const removeTour = (id) => {
    const newTour = people.filter(tour => tour.id !== id)
    setPeople(newTour)
  }
  if (loading === true) {
    return <>
      <Loading />
    </>
  }
  if (people.length === 0) {
    return (
      <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={()=>{fetchData()}}>Refresh</button>
    </div>
    ) 
  }
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our tours</h2>
          <div className='underline'></div>
    </div>
      {people.map(tour => {
        return <div key={tour.id}>
          <Tours tour={tour} removeTour={removeTour} />
        </div>
      })}
    </section>
    </main>
  )
}

export default App
