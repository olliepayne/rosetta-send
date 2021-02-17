import { useState } from 'react'
import CSS from './Profile.module.css'
import UpdateUserForm from '../../components/UpdateUserForm/UpdateUserForm'

// show climbs we submitted, and our wishlist

const Profile = (props) => {
 const { user } = props

 const [showForm, setShowForm] = useState()

 // update

 // delete

 return (
  <div className={CSS.page}>
   {!showForm ?
    <div className={CSS.profileContainer}>
     
    </div>
    :
    <UpdateUserForm />
   }
  </div>
 )
}

export default Profile