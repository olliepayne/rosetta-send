import CSS from './Landing.module.css'

const Landing = (props) => {
 const { user } = props

 return (
  <div className={CSS.page}>
    <h2>Welcome to Rosetta Send!</h2>
    <p>
    I built Rosetta Send as an homage to my love and pursuit of elite sport climbing. 
    The app allows a user to add a route, of any name/type/grade/location, which can then be searched by anybody using the built in Route Finder. 
    The user can also view their profile of submitted climbs, and delete their account if they choose to. 
    It is a full CRUD, MERN stack application. I began building this during my time with General Assembly.
    </p>
  </div>
 )
}

export default Landing