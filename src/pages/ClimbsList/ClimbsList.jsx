// allow us to view a specific climb, if we are the owner we have power to update or delete the climb
import ClimbFinder from '../../components/ClimbFinder/ClimbFinder'

const SearchResults = (props) => {
 // destruct the props here
 // map a list for the results which were passed

 return (
  <div>
   
  </div>
 )
}

const ClimbsList = (props) => {
 const { climbsAPI, climbGrades } = props

 // handle climb search, use our api passsed through props
 // have a nested array of pages for our search results

 const handleClimbSearch = (form) => {
  console.log(form)
 }

 return (
  <div>
   <ClimbFinder climbGrades={climbGrades} handleClimbSearch={handleClimbSearch} />
  </div>
 )
}

export default ClimbsList