import LoginForm from '../../components/LoginForm/LoginForm'

const Login = (props) => {
 const { user, authStatus, handleLogin } = props

 return (
  <div>
   {authStatus && <p>{authStatus}</p>}
   {!user ?
    <LoginForm handleLogin={handleLogin} />
    :
    <p>Welcome, {user.username}</p>
   }
  </div>
 )
}

export default Login;