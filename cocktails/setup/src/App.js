import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
         <Route path='/coctail/:id'>
          <SingleCocktail />
        </Route>
         <Route path='*'>
          <Error />
        </Route>
      </Switch>
   </Fragment>
  )
}

export default App
