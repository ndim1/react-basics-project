import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => { // so ova kazuvame da gi zacuvuva koga ke refresirame 
  let data = localStorage.getItem('data')
  if (data) {
    return JSON.parse(localStorage.getItem('data'))
  } else {
    return []
  }
}
function App() {
  const [value, setValue] = useState('')
  const [data, setData] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, text: '', type:'' })

  
  const submitHandler = e => {
    e.preventDefault()
    if (!value) {
      setAlert({show:true,text:'please enter a value',type:'danger'})
    }

    else if (value && isEditing) {
      setData(data.map(list => {
        if (list.id === editId) {
          return {...list,title:value}
        }
        return list
      }))
      setIsEditing(false)
      setEditId(null)
      setValue('')
      setAlert({show:true,type:'success', text:'changed value'})
    }
      
    else {
      setAlert({show:true,type:'success',text:'succesful'})
      const newValue = { id: Math.floor(Math.random() * 100), title: value }
      setData([...data, newValue])
      setValue('')
    }
  }

  const removeItem = (id) => {
    const deleteItem = data.filter(remove => remove.id !== id)
    setData(deleteItem)
    setAlert({show:true,type:'danger',text:'removed value'})
  }

  const clearAll = () => {
    setData([])
    setAlert({show:true,type:'danger',text:'clear all items'})
  }

  const removeAlert = () => {
    setAlert({show:false,text:'',type:''})
  }

  const editItem = (id) => {
    const specificItem = data.find(data => data.id === id)
    setIsEditing(true)
    setEditId(id)
    setValue(specificItem.title)
  }
  useEffect(() => {
    localStorage.setItem('data',JSON.stringify(data)) // so ova kazuvame da gi pojavuva vo localstorage vrednostite od data
  }, [data])
  
  return <section className='section-center'>
        
      <form className='grocery-form' onSubmit={submitHandler} >
        {alert.show && <Alert {...alert} removeAlert={removeAlert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
        <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder='e.g.g egs' className='grocery' />
        <button className='submit-btn' >{isEditing ? 'edit':'submit'}</button>
          </div>
      </form>
      {data.length > 0 &&
        <div className='grocery-container'>
          <List items={data} removeItem={removeItem} editItem={editItem}/>
          <button className='clear-btn' onClick={clearAll}>Clear items</button>
        </div>
      }
      
    </section>
    
  
}

export default App

