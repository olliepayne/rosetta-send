import { useState } from 'react'

const UpdateClimbForm = (props) => {
 const { climb, climbGrades, handleUpdateClimb } = props

 const [formData, setFormData] = useState({
  name: climb.name,
  type: climb.type,
  grade: climb.grade,
  location: climb.location
 })

 const handleInputChange = (e) => {
  const newData = Object.assign({}, formData)
  newData[e.target.name] = e.target.value
  
  if(newData.type !== formData.type) {
   if(newData.type === 'Boulder') {
    newData.grade = climbGrades.boulder[0]
   } else if(newData.type === 'Sport') {
    newData.grade = climbGrades.sport[0]
   }
  }

  setFormData(newData)
 }

 const isValidForm = () => {
  for(const key in formData) {
   if(formData[key] === '') {
    return false
   }
  }

  return true
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  if(isValidForm()) {
   handleUpdateClimb(formData)
  }
 }

 return (
  <form onSubmit={handleSubmit} >
   <label>*Name</label>
   <input name="name" type="text" defaultValue={formData.name} onChange={handleInputChange} />
   <label>*Type</label>
   <select name="type" defaultValue={formData.type} onChange={handleInputChange}>
    <option>Boulder</option>
    <option>Sport</option>
   </select>
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
   <label>*Location</label>
   <input name="location" type="text" defaultValue={formData.location} onChange={handleInputChange} />
   <button>Submit</button>
  </form>
 )
}

export default UpdateClimbForm