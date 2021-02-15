import { useState } from 'react'

const AddClimbForm = (props) => {
 const { user, climbGrades, handleAddClimb } = props

 const [formData, setFormData] = useState({
  name: '',
  type: 'Boulder',
  grade: climbGrades.boulder[0],
  location: '',
  addedBy: user.username
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
   handleAddClimb(formData)
  }
 }

 return (
  <form onSubmit={handleSubmit} >
   <label>*Name</label>
   <input name="name" type="text" onChange={handleInputChange} />
   <label>*Type</label>
   <select name="type" onChange={handleInputChange}>
    <option>Boulder</option>
    <option>Sport</option>
   </select>
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
   <label>*Location</label>
   <input name="location" type="text" onChange={handleInputChange} />
   <button>Submit</button>
  </form>
 )
}

export default AddClimbForm