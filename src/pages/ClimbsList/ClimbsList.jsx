import { useState } from 'react'
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

 // have a nested array of pages for our search results
 const [searchResults, setSearchResults] = useState()

 const handleClimbSearch = async (form) => {
  const result = await climbsAPI.search(form)
  
 }

 return (
  <div>
   <ClimbFinder climbGrades={climbGrades} handleClimbSearch={handleClimbSearch} />
  </div>
 )
}

export default ClimbsList