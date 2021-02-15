import { useState } from 'react'

const AddClimbForm = (props) => {
 const { climbGrades } = props

 const [formData, setFormData] = useState({
  name: '',
  type: 'Boulder',
  grade: '',
  location: ''
 })

 // dynamically change grade selection based off of climb type
 // check type moving to and type coming from, display select options based off
 // two unique select boxes, displayed based off render condition ?

 const handleInputChange = (e) => {
  const newData = Object.assign({}, formData)
  newData[e.target.name] = e.target.value
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
     {climbGrades.boulder.map((grade, index) => (
      <option key={index}>{grade}</option>
     ))}
    </select>
    :
    <select name="grade" onChange={handleInputChange}>
     {climbGrades.sport.map((grade, index) => (
      <option key={index}>{grade}</option>
     ))}
    </select>
   }
   <button>Submit</button>
  </form>
 )
}

export default AddClimbForm