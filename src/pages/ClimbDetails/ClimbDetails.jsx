import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ClimbDetailsCSS from './ClimbDetails.module.css'
import UpdateClimbForm from '../../components/UpdateClimbForm/UpdateClimbForm'

const ClimbDetails = (props) => {
 const { id } = useParams()

 const { user, climbsAPI, climbGrades } = props

 const [climb, setClimb] = useState()
 const [showUpdateForm, setShowUpdateForm] = useState(false)

 const handleGetClimb = async () => {
  const result = await climbsAPI.getOne(id)
  setClimb(result)
 }

 const handleUpdateClimb = async (form) => {
  const result = climbsAPI.update(id, form)
  setClimb(result)
 }

 useEffect(() => {
  handleGetClimb()
 }, [])

 return (
  <div className={ClimbDetailsCSS.page}>
   {climb ?
    !showUpdateForm ?
     <div className={ClimbDetailsCSS.climbDetailsContainer}>
      <div className={ClimbDetailsCSS.climbDetails}>
       <h3>{climb.name}</h3>
       <p>{climb.grade} / {climb.location}</p>
       <p><span style={{ fontStyle: 'italic' }}>submitted by {climb.addedBy}</span></p>
       {user.username === climb.addedBy &&
        <div className={ClimbDetailsCSS.btnContainer}>
         <button onClick={setShowUpdateForm(!showUpdateForm)} className={ClimbDetailsCSS.updateBtn}>Update</button>
         <button className={ClimbDetailsCSS.deleteBtn}>Delete</button>
        </div>
       }
      </div>
     </div>
     :
     <UpdateClimbForm climb={climb} climbGrades={climbGrades} handleUpdateClimb={handleUpdateClimb} />
    :
    <p>Loading...</p>
   }
  </div>
 )
}

export default ClimbDetails