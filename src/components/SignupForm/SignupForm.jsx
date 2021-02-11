import { useState } from 'react'

const SignupForm = () => {
 // import useState, setup inital form data hook
 // handle input changes
 // submit form data through props

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

 return (
  <form>
   <label>*Username</label>
   <input name="username" type="text" />
   <label>*Email</label>
   <input name="email" type="text" />
   <label>*Password</label>
   <input name="password" type="password" onChange={handleInputChange} />
   {!passwordMatch && <p>passwords must match</p>}
   <label>*Confirm Password</label>
   <input name="passwordCheck" type="password" onChange={handleInputChange} />
  </form>
 )
}

export default SignupForm