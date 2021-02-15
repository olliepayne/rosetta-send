import { useState } from 'react'

const AddClimbForm = (props) => {
 const [formData, setFormData] = useState({
  name: '',
  type: '',
  grade: '',
  location: ''
 })

 // dynamically change grade selection based off of climb type
 // check type moving to and type coming from, display select options based off
 // two unique select boxes, displayed based off render condition ?

 const handleInputChange = (e) => {
  const newData = formData
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
   <button>Submit</button>
  </form>
 )
}

export default AddClimbForm