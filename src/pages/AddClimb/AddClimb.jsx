import * as climbsAPI from '../../services/climbsAPI'
import AddClimbForm from '../../components/AddClimbForm/AddClimbForm'

const AddClimb = (props) => {
 const { user } = props

 return (
  <div>
   {user ?
    <AddClimbForm />
    :
    <p>You must be logged in to add a route.</p>
   }
  </div>
 )
}

export default AddClimb