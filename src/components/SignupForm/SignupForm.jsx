import { useState } from 'react'
import { Link } from 'react-router-dom'
import CSS from './SignupForm.module.css'

const SignupForm = (props) => {
 const { statusCode, handleSignup } = props

 const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: '',
  passwordCheck: ''
 })
 const [isComplete, setIsComplete] = useState(true)
 const [passwordMatch, setPasswordMatch] = useState(true)

 const handleInputChange = (e) => {
  const newData = Object.assign({}, formData)
  newData[e.target.name] = e.target.value
  setFormData(newData)

  if (e.target.name === 'password' || e.target.name === 'passwordCheck') setPasswordMatch(handlePasswordCheck(newData))
 }

 const handlePasswordCheck = (newData) => {
  if (newData.password === newData.passwordCheck) return true
  return false
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
   handleSignup(formData)
  }
 }

 return (
  <div className={CSS.formContainer}>
   <h3>Signup</h3>
   {!isComplete && <p className={CSS.formMessage}>Please complete signup.</p>}
   {statusCode && isComplete ? <p className={CSS.statusCode}>{statusCode}</p> : null}
   <form onSubmit={handleSubmit} >
    <div className={CSS.formEntry}>
     <label>*Username</label>
     <input name="username" type="text" onChange={handleInputChange} />
    </div>
    <div className={CSS.formEntry}>
     <label>*Email</label>
     <input name="email" type="text" onChange={handleInputChange} />
    </div>
    <div className={CSS.formEntry}>
     <label>*Password</label>
     <input name="password" type="password" onChange={handleInputChange} />
    </div>
    {!passwordMatch && <p>passwords must match</p>}
    <div className={CSS.formEntry}>
     <label>*Confirm Password</label>
     <input name="passwordCheck" type="password" onChange={handleInputChange} />
    </div>
    <div className={CSS.pageControl}>
     <button className={CSS.submitBtn}>Submit</button>
     <Link to="/login">Have an account? Login</Link>
    </div>
   </form>
  </div>
 )
}

export default SignupForm