import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState('title')
  const [value,setValue] = useState('value')

  const getPerson = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    console.log(person)
    const { first, last } = person.name
    const { email, phone } = person
    const { age } = person.dob
    const { street: { number, name }
    } = person.location
    const { password } = person.login
    const { large } = person.picture
    const newPerson = {
      large,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
  }
    setLoading(false)
    setPerson(newPerson)
    setTitle('name')
    setValue(newPerson.name)
    
  }
  const handleValue = (e) => {
     if (e.target.classList.contains('icon')) { // ova kazuva dali e tocno ili netocno t.e dali vo batonite className=== icon
      const newValue = e.target.dataset.label // ova go kazuva imeto na ikonata koga ke pomineme preku koja doaga od data-label vo buttonite kaj sto se ikonite
       setTitle(newValue) // vrednosta na title e vrednosta od imeto na ikonata 
       setValue(person[newValue])// vrednosta na vallue e ednakva na person i imeto na ikonata t.e od person newPerson{} i e vo [] za da bide dinamicno
    }
  }

  useEffect(() => {
    getPerson()
  },[])
  return (
     <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(person && person.large) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
