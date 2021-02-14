import { useState } from 'react'

const SignupForm = (props) => {
 const { handleSignup } = props

 const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: '',
  passwordCheck: ''
 })

 const [passwordMatch, setPasswordMatch] = useState(true)

 const handleInputChange = (e) => {
  const newData = formData
  newData[e.target.name] = e.target.value
  setFormData(newData)

  if(e.target.name === 'password' || e.target.name === 'passwordCheck') setPasswordMatch(handlePasswordCheck(newData))
 }

 const handlePasswordCheck = (newData) => {
  if(newData.password === newData.passwordCheck) return true
  return false
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
   handleSignup(formData)
  }
 }

 return (
  <form onSubmit={handleSubmit} >
   <label>*Username</label>
   <input name="username" type="text" onChange={handleInputChange} />
   <label>*Email</label>
   <input name="email" type="text" onChange={handleInputChange} />
   <label>*Password</label>
   <input name="password" type="password" onChange={handleInputChange} />
   {!passwordMatch && <p>passwords must match</p>}
   <label>*Confirm Password</label>
   <input name="passwordCheck" type="password" onChange={handleInputChange} />
   <button>Submit</button>
  </form>
 )
}

export default SignupForm