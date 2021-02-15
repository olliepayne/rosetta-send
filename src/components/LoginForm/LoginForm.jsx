import { useState } from 'react'

const LoginForm = (props) => {
 const { handleLogin } = props

 const [formData, setFormData] = useState({
  email: '',
  password: ''
 })

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
   handleLogin(formData)
  }
 }

 return (
  <form onSubmit={handleSubmit} >
   <label>*Email</label>
   <input name="email" type="text" onChange={handleInputChange} />
   <label>*Password</label>
   <input name="password" type="password" onChange={handleInputChange} />
   <button>Submit</button>
  </form>
 )
}

export default LoginForm