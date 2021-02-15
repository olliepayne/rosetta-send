import { useState } from 'react'

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
  for(const key in formData) {
   if(formData[key] === '') {
    setIsComplete(false)
    return false
   }
  }

  setIsComplete(true)
  return true
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  if(isValidForm()) {
   handleLogin(formData)
  }
 }

 return (
  <form onSubmit={handleSubmit}>
   {!isComplete && <p>Please enter all credentials.</p>}
   <label>*Email</label>
   <input name="email" type="text" onChange={handleInputChange} />
   <label>*Password</label>
   <input name="password" type="password" onChange={handleInputChange} />
   <button>Submit</button>
  </form>
 )
}

export default LoginForm