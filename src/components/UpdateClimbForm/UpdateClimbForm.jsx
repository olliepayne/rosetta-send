import { useState } from 'react'
import UpdateClimbFormCSS from './UpdateClimbForm.module.css'

const UpdateClimbForm = (props) => {
 const { climb, climbGrades, handleUpdateClimb, handleShowForm } = props

 const [formData, setFormData] = useState({
  name: climb.name,
  type: climb.type,
  grade: climb.grade,
  location: climb.location
 })
 const [isComplete, setIsComplete] = useState(true)

 const handleInputChange = (e) => {
  const newData = Object.assign({}, formData)
  newData[e.target.name] = e.target.value

  if (newData.type !== formData.type) {
   if (newData.type === 'Boulder') {
    newData.grade = climbGrades.boulder[0]
   } else if (newData.type === 'Sport') {
    newData.grade = climbGrades.sport[0]
   }
  }

  setFormData(newData)
 }

 const isValidForm = () => {
  for (const key in formData) {
   if (formData[key] === '') {
    setIsComplete(false)
    return false
   }
  }

  setIsComplete(true)
  return true
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  if (isValidForm()) {
   handleUpdateClimb(formData)
   handleShowForm()
  }
 }

 return (
  <div className={UpdateClimbFormCSS.formContainer}>
   <h3>Update Route</h3>
   {!isComplete && <p className={UpdateClimbFormCSS.formMessage}>All fields are required.</p>}
   <form onSubmit={handleSubmit} >
    <div className={UpdateClimbFormCSS.formEntry}>
     <label>*Name</label>
     <input name="name" type="text" defaultValue={formData.name} onChange={handleInputChange} />
    </div>
    <div className={UpdateClimbFormCSS.formEntry}>
     <label>*Type</label>
     <select name="type" defaultValue={formData.type} onChange={handleInputChange}>
      <option>Boulder</option>
      <option>Sport</option>
     </select>
    </div>
    <div className={UpdateClimbFormCSS.formEntry}>
     <label>*Grade</label>
     {formData.type === 'Boulder' ?
      <select name="grade" defaultValue={formData.grade} onChange={handleInputChange}>
       {climbGrades.boulder.map((grade) => (
        <option key={grade}>{grade}</option>
       ))}
      </select>
      :
      <select name="grade" defaultValue={formData.grade} onChange={handleInputChange}>
       {climbGrades.sport.map((grade) => (
        <option key={grade}>{grade}</option>
       ))}
      </select>
     }
    </div>
    <div className={UpdateClimbFormCSS.formEntry}>
     <label>*Location</label>
     <input name="location" type="text" defaultValue={formData.location} onChange={handleInputChange} />
    </div>
    <button className={UpdateClimbFormCSS.submitBtn}>Submit</button>
   </form>
   <button onClick={handleShowForm} className={UpdateClimbFormCSS.cancelBtn}>Cancel</button>
  </div>
 )
}

export default UpdateClimbForm