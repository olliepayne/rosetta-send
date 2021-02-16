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
   <SearchResults page={page} results={searchResults[page]} />
  </div>
 )
}

export default ClimbsList