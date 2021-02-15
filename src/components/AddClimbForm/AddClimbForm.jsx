import { useState } from 'react'

const AddClimbForm = (props) => {
 const [formData, setFormData] = useState({
  
 })

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
   <label>*Email</label>
   <input name="email" type="text" onChange={handleInputChange} />
   <button>Submit</button>
  </form>
 )
}

export default AddClimbForm