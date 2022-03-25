import React, { useEffect } from 'react'

const Alert = ({text,type,removeAlert}) => { // text and type come from alert(useState)
  useEffect(() => {
    setTimeout(() => {
      removeAlert()
     },3000
    )
  },[removeAlert])
  return <p className={`alert alert-${type}`}>{text}</p>
      
}

export default Alert
