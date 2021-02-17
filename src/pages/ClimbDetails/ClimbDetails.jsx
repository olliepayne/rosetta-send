import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ClimbDetailsCSS from './ClimbDetails.module.css'

const ClimbDetails = (props) => {
 const { id } = useParams()

 const { user, climbsAPI } = props

 const [climb, setClimb] = useState()

 // if we are the owner of the climb, add the ability to update and delete

 const handleGetClimb = async () => {
  const result = await climbsAPI.getOne(id)
  setClimb(result)
 }

 useEffect(() => {
  handleGetClimb()
 }, [])

 return (
  <div className={ClimbDetailsCSS.page}>
   {climb ?
    <div className={ClimbDetailsCSS.climbDetailsContainer}>
     <div className={ClimbDetailsCSS.climbDetails}>
      <h3>{climb.name}</h3>
      <p>{climb.grade} / {climb.location}</p>
      <p><span style={{ fontStyle: 'italic' }}>submitted by {climb.addedBy}</span></p>
      {user.username === climb.addedBy &&
       <div className={ClimbDetailsCSS.btnContainer}>
        <button className={ClimbDetailsCSS.updateBtn}>Update</button>
        <button className={ClimbDetailsCSS.deleteBtn}>Delete</button>
       </div>
      }
     </div>
    </div>
    :
    <p>Loading...</p>
   }
  </div>
 )
}

export default ClimbDetails