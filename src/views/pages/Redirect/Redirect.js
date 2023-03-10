import React from 'react'
import {Redirect} from 'react-router-dom'
function Redirec() {
  return (
    <div>
        <Redirect to={{ pathname: "/dashboard" }}/> 
   </div>
  )
}

export default Redirec