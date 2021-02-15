import { useState } from 'react'

const Landing = (props) => {
 const { user } = props

 return (
  <div>
   Home
   {user && <p>{user.username}</p>}
  </div>
 )
}

export default Landing