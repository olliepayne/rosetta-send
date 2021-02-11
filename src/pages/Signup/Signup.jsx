import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = (props) => {
 const { handleSignup } = props

 return (
  <div>
   <SignupForm handleSignup={handleSignup} />
  </div>
 )
}

export default Signup