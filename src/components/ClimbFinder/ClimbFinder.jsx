import { useState } from 'react'

const ClimbFinder = (props) => {
 const { climbGrades, handleClimbSearch } = props

 // form data
 const [formData, setFormData] = useState({
  name: '',
  type: '',
  grade: '',
  location: ''
 })

 const handleInputChange = (e) => {
  const newData = Object.assign({}, formData)
  newData[e.target.name] = e.target.value

  if (newData.type !== formData.type) {
   if (newData.type === 'Boulder') {
    newData.grade = climbGrades.boulder[0]
   } else if (newData.type === 'Sport') {
    newData.grade = climbGrades.sport[0]
   } else if(newData.type === '') {
    newData.grade = ''
   }
  }

  console.log(newData)
  setFormData(newData)
 }

 const isValidForm = () => {
  for (const key in formData) {
   if (formData[key] === '') {
    return false
   }
  }

  return true
 }

 const handleSubmit = (e) => {
  // send if form is valid
 }

 return (
  <div>
   <h3>Route Finder</h3>
   <form onSubmit={handleSubmit}>
    <div>
     <label>Name</label>
     <input name="name" type="text" onChange={handleInputChange} />
    </div>
    <div>
     <label>Type</label>
     <select name="type" onChange={handleInputChange}>
      <option value={''}>All</option>
      <option>Boulder</option>
      <option>Sport</option>
     </select>
    </div>
    <div>
     {formData.type !== '' ?
      <>
      <label>Grade</label>
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
       </>
      :
      null
     }
    </div>
    <div>
     <label>Location</label>
     <input name="location" type="text" onChange={handleInputChange} />
    </div>
   </form>
  </div>
 )
}

export default ClimbFinder