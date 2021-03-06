import CSS from './Login.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = (props) => {
 const { user, statusCode, handleLogin } = props

 return (
  <div className={CSS.page}>
   {!user ?
    <LoginForm statusCode={statusCode} handleLogin={handleLogin} />
    :
    <p>Welcome, {user.username}</p>
   }
  </div>
 )
}

export default Login;