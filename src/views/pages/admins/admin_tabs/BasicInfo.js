import React from 'react'
import AddAdminForm from '../form/AddAdminForm'
import ViewAdminForm from '../form/ViewAdminForm'

function BasicInfo({status}) {
  return (
    <div>
      {
        status ==='add' ?<AddAdminForm /> :<ViewAdminForm />  
      }
       
    </div>
  )
}

export default BasicInfo