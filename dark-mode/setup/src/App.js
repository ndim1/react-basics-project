import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getThemeLocalStorage = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
    
}
function App() {
  const [theme, setTheme] = useState(getThemeLocalStorage())
  
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  const changeTheme = () => {
   setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')
  }
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={changeTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  )

}

export default App
