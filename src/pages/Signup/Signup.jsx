import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = (props) => {
 const { authStatus, handleSignup } = props

 return (
  <div>
   {authStatus && <p>{authStatus}</p>}
   <SignupForm handleSignup={handleSignup} />
  </div>
 )
}

export default Signup