import { useState } from 'react'

const ClimbFinder = (props) => {
 const { climbGrades, handleClimbSearch } = props

 const [formData, setFormData] = useState({
  name: '',
  type: '',
  gradeMin: '',
  gradeMax: '',
  location: ''
 })

 const handleInputChange = (e) => {
  const newData = Object.assign({}, formData)
  newData[e.target.name] = e.target.value

  if (newData.type !== formData.type) {
   if (newData.type === 'Boulder') {
    newData.gradeMin = climbGrades.boulder[0]
    newData.gradeMax = climbGrades.boulder[0]
   } else if (newData.type === 'Sport') {
    newData.gradeMin = climbGrades.sport[0]
    newData.gradeMax = climbGrades.sport[0]
   } else if (newData.type === '') {
    newData.gradeMin = ''
    newData.gradeMax = ''
   }
  }

  // console.log(newData)
  setFormData(newData)
 }

 const structureSearchData = () => {
  const newData = {}
  for (const key in formData) {
   if (formData[key] !== '') {
    newData[key] = formData[key]
   }
  }

  return newData
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  const submitData = structureSearchData()
  // console.log('submit data' + JSON.stringify(submitData))
  handleClimbSearch(submitData)
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
       <label>Grade Range</label>
       {formData.type === 'Boulder' ?
        <select name="gradeMin" onChange={handleInputChange}>
         {climbGrades.boulder.map((grade) => (
          <option key={grade}>{grade}</option>
         ))}
        </select>
        :
        <select name="gradeMin" onChange={handleInputChange}>
         {climbGrades.sport.map((grade) => (
          <option key={grade}>{grade}</option>
         ))}
        </select>
       }
       <p>to</p>
       {formData.type === 'Boulder' ?
        <select name="gradeMax" onChange={handleInputChange}>
         {climbGrades.boulder.map((grade) => (
          <option key={grade}>{grade}</option>
         ))}
        </select>
        :
        <select name="gradeMax" onChange={handleInputChange}>
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
    <button>Submit</button>
   </form>
  </div>
 )
}

export default ClimbFinder