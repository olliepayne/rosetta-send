import { useState } from 'react'
import CSS from './AddClimbForm.module.css'

const AddClimbForm = (props) => {
 const { user, climbGrades, handleAddClimb } = props

 const [formData, setFormData] = useState({
  name: '',
  type: 'Boulder',
  grade: climbGrades.boulder[0],
  location: '',
  addedBy: user.username
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
   handleAddClimb(formData)
  }
 }

 return (
  <div className={CSS.formContainer}>
   <h3>Add Climb</h3>
   {!isComplete && <p className={CSS.formMessage}>Please fill all required fields.</p>}
   <form onSubmit={handleSubmit} >
   <div className={CSS.formEntry}>
     <label>*Name</label>
     <input name="name" type="text" onChange={handleInputChange} />
    </div>
    <div className={CSS.formEntry}>
     <label>*Type</label>
     <select name="type" onChange={handleInputChange}>
      <option>Boulder</option>
      <option>Sport</option>
     </select>
    </div>
    <div className={CSS.formEntry}>
     <label>*Grade</label>
     {formData.type === 'Boulder' ?
      <select name="grade" onChange={handleInputChange}>
       {climbGrades.boulder.map((grade) => (
        <option key={grade}>{grade}</option>
       ))}
      </select>
      :
      <select name="grade" onChange={handleInputChange}>
       {climbGrades.sport.map((grade) => (
        <option key={grade}>{grade}</option>
       ))}
      </select>
     }
    </div>
    <div className={CSS.formEntry}>
     <label>*Location</label>
     <input name="location" type="text" onChange={handleInputChange} />
    </div>
    <button>Submit</button>
   </form>
  </div>
 )
}

export default AddClimbForm