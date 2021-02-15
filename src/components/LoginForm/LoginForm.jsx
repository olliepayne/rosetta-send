import { useState } from 'react'
import LoginFormCSS from './LoginForm.module.css'

const LoginForm = (props) => {
 const { handleLogin } = props

 const [formData, setFormData] = useState({
  email: '',
  password: ''
 })
 const [isComplete, setIsComplete] = useState(true)

 const handleInputChange = (e) => {
  const newData = Object.assign({}, formData)
  newData[e.target.name] = e.target.value
  setFormData(newData)
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
   handleLogin(formData)
  }
 }

 return (
  <div className={LoginFormCSS.formContainer}>
   {!isComplete && <p className={LoginFormCSS.formMessage}>Please enter all credentials.</p>}
   <form className={LoginFormCSS.loginForm} onSubmit={handleSubmit}>
    <div className={LoginFormCSS.formEntry}>
     <label>*Email</label>
     <input name="email" type="text" onChange={handleInputChange} />
    </div>
    <div className={LoginFormCSS.formEntry}>
     <label>*Password</label>
     <input name="password" type="password" onChange={handleInputChange} />
    </div>
    <button className={LoginFormCSS.submitBtn}>Submit</button>
   </form>
  </div>
 )
}

export default LoginForm