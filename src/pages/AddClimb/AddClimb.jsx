import * as climbsAPI from '../../services/climbsAPI'
import AddClimbForm from '../../components/AddClimbForm/AddClimbForm'

const AddClimb = (props) => {
 const { user, climbGrades } = props

 return (
  <div>
   {user ?
    <AddClimbForm climbGrades={climbGrades} />
    :
    <p>You must be logged in to add a route.</p>
   }
  </div>
 )
}

export default AddClimb