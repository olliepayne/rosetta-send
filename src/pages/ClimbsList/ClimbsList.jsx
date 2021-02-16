import { useState } from 'react'
import { Link } from 'react-router-dom'
import ClimbFinder from '../../components/ClimbFinder/ClimbFinder'

const SearchResults = (props) => {
 const { results } = props
 // map a list for the results which were passed

 return (
  <div>
   <ul>
    {results.map((climb) => (
     <li key={climb._id}><Link to={`/routes/${climb._id}`}>{climb.name}</Link></li>
    ))}
   </ul>
  </div>
 )
}

const ClimbsList = (props) => {
 const { climbsAPI, climbGrades } = props

 const [searchResults, setSearchResults] = useState()
 const [page, setPage] = useState(0)
 const resultsPerPage = 2

 const divideSearchResults = (results) => {
  const tempArr = []
  for(let i = 0; i < results.length / resultsPerPage; i++) {
   const newPage = []
   for(let j = 0; j < resultsPerPage; j++) {
    const index = i * resultsPerPage + j
    if(results[index]) newPage.push(results[index])
   }

   tempArr.push(newPage)
   setSearchResults(tempArr)
  }
 }

 const handleClimbSearch = async (form) => {
  const results = await climbsAPI.search(form)
  divideSearchResults(results)
 }

 // add page navigation (for search results)

 return (
  <div>
   <ClimbFinder climbGrades={climbGrades} handleClimbSearch={handleClimbSearch} />
   {searchResults ?
    <div>
     <SearchResults results={searchResults[page]} />
    </div>
    :
    <p></p>
   }
  </div>
 )
}

export default ClimbsList