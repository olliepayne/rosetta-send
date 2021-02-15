import LoginForm from '../../components/LoginForm/LoginForm'

const Login = (props) => {
 const { user, authMessage, handleLogin } = props

 return (
  <div>
   {authMessage && <p>{authMessage}</p>}
   {!user ?
    <LoginForm handleLogin={handleLogin} />
    :
    <p>Welcome, {user.username}</p>
   }
  </div>
 )
}

export default Login;