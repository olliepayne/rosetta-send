import CSS from './Signup.module.css'
import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = (props) => {
 const { statusCode, handleSignup } = props

 return (
  <div className={CSS.page}>
   <SignupForm statusCode={statusCode} handleSignup={handleSignup} />
  </div>
 )
}

export default Signup