import React, { useState, useContext} from 'react'
// make sure to use https
import useFetch from './useFetch'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  

  const [query, setQuery] = useState('batman')
  const { loading, error, data: movie } = useFetch(`&s=${query}`)
  console.log(movie)
  
  
  const value = {
    loading,error,movie,query,setQuery
  }
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
