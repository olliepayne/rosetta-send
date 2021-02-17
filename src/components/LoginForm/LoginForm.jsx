import { useState } from 'react'
import { Link } from 'react-router-dom'
import CSS from './LoginForm.module.css'

const LoginForm = (props) => {
 const { statusCode, handleLogin } = props

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
  <div className={CSS.formContainer}>
   <h3>Login</h3>
   {!isComplete && <p className={CSS.formMessage}>Please enter all credentials.</p>}
   {statusCode && isComplete ? <p className={CSS.statusCode}>{statusCode}</p> : null}
   <form className={CSS.loginForm} onSubmit={handleSubmit}>
    <div className={CSS.formEntry}>
     <label>*Email</label>
     <input name="email" type="text" onChange={handleInputChange} />
    </div>
    <div className={CSS.formEntry}>
     <label>*Password</label>
     <input name="password" type="password" onChange={handleInputChange} />
    </div>
    <div className={CSS.pageControl}>
     <button className={CSS.submitBtn}>Submit</button>
     <Link to="/signup">Need an account? Signup</Link>
    </div>
   </form>
  </div>
 )
}

export default LoginForm