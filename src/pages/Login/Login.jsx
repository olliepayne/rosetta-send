import LoginForm from '../../components/LoginForm/LoginForm'

const Login = (props) => {
 const { user, handleLogin } = props

 return (
  <div>
   {user ?
    <LoginForm handleLogin={handleLogin} />
    :
    <p>Welcome, {user.username}</p>
   }
  </div>
 )
}

export default Login;