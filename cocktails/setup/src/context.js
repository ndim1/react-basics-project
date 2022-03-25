import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [coctail, setCoctail] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm,setSearchTerm] = useState('b')
  
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        const newCoctail = drinks.map(list => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = list

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCoctail(newCoctail)
        setIsLoading(false)
      }
      else {
        setCoctail([]) 
        setIsLoading(false)
      }
      
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchData()
  }, [searchTerm,fetchData])

  const value = {
    coctail,
    isLoading,
    searchTerm,
    setSearchTerm
  }
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
