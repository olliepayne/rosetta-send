import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = (props) => {
 const { handleSignup } = props

 // render signup form

 return (
  <div>
   <SignupForm handleSignup={handleSignup} />
  </div>
 )
}

export default Signup