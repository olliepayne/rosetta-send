import LoginForm from '../../components/LoginForm/LoginForm'

const Login = (props) => {
 const { handleLogin } = props

 return (
  <div>
   <LoginForm handleLogin={handleLogin} />
  </div>
 )
}

export default Login;