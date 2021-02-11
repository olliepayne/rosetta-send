import { Link } from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'

const Navbar = (props) => {
 const { tokenIndex } = props

 return (
  <nav>
   <h2 className={NavbarCSS.siteName}><Link to="/">Rosetta Send</Link></h2>
   <ul className={NavbarCSS.navLinks}>
    {tokenIndex ?
     <>
      <li><Link to="/routes">Routes</Link></li>
      <li><Link to="/login">Logout</Link></li>
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