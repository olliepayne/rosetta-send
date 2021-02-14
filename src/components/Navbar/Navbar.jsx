import { Link } from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'

const Navbar = (props) => {
 const { user, handleLogout } = props

 return (
  <nav>
   <h2 className={NavbarCSS.siteName}><Link to="/">Rosetta Send</Link></h2>
   <ul className={NavbarCSS.navLinks}>
    {user ?
     <>
      <li><Link to="/routes">Routes</Link></li>
      <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
     </>
     :
     <>
      <li><Link to="/routes">Routes</Link></li>
      <li><Link to="/login">Login</Link></li>
     </>
    }
   </ul>
  </nav>
 )
}

export default Navbar