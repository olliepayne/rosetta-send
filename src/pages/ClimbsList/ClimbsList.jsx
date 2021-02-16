import { useState } from 'react'
import { Link } from 'react-router-dom'
import ClimbsListCSS from './ClimbsList.module.css'
import ClimbFinder from '../../components/ClimbFinder/ClimbFinder'

const SearchResults = (props) => {
 const { results } = props

 return (
  <div>
   <ul className={ClimbsListCSS.resultsList}>
    {results.map((climb, index) => (
     <li className={index % 2 === 0 ? ClimbsListCSS.evenResult : ClimbsListCSS.oddResult} key={climb._id}>
      <Link to={`/routes/${climb._id}`}>{climb.name} / {climb.grade} / {climb.location} / submitted by {climb.addedBy}</Link>
     </li>
    ))}
   </ul>
  </div>
 )
}

const ClimbsList = (props) => {
 const { climbsAPI, climbGrades } = props

 const [searchResults, setSearchResults] = useState()
 const [totalResults, setTotalResults] = useState(0)
 const [page, setPage] = useState(0)
 const resultsPerPage = 5

 const divideSearchResults = (results) => {
  const tempArr = []
  let resultsCount = 0
  for(let i = 0; i < results.length / resultsPerPage; i++) {
   const newPage = []
   for(let j = 0; j < resultsPerPage; j++) {
    const index = i * resultsPerPage + j
    if(results[index]) {
     newPage.push(results[index])
     resultsCount++
    } else {
     break
    }
   }

   tempArr.push(newPage)
   setTotalResults(resultsCount)
  }

  setSearchResults(tempArr)
 }

 const handleClimbSearch = async (form) => {
  const results = await climbsAPI.search(form)
  divideSearchResults(results)
 }

  //#region Search Results Navigation
 const loadNextResults = () => {
  setPage(page + 1 === searchResults.length ? 0 : page + 1)
 }

 const loadLastResults = () => {
  setPage(searchResults.length - 1)
 }

 const loadPreviousResults = () => {
  setPage(page - 1 < 0 ? searchResults.length - 1 : page - 1)
 }

 const loadFirstResults = () => {
  setPage(0)
 }
 //#endregion

 return (
  <div className={ClimbsListCSS.climbsListPage}>
   <ClimbFinder className={ClimbsListCSS.climbFinder} climbGrades={climbGrades} handleClimbSearch={handleClimbSearch} />
   {searchResults ?
    <div className={ClimbsListCSS.searchResultsContainer}>
     {searchResults.length > 0 ? <p>Found {totalResults} matching results...</p> : <p>No matching results...</p>}
     {searchResults.length > 0 && <SearchResults results={searchResults[page]} />}
     <div className={ClimbsListCSS.resultsControlContainer}>
      <p className={ClimbsListCSS.resultsControlBtn} onClick={loadFirstResults}>{'<<'}</p>
      <p className={ClimbsListCSS.resultsControlBtn} onClick={loadPreviousResults}>{'<'}</p>
      <p className={ClimbsListCSS.resultsPageCount}>{page + 1}/{searchResults.length > 0 ? searchResults.length : 1}</p>
      <p className={ClimbsListCSS.resultsControlBtn} onClick={loadNextResults}>{'>'}</p>
      <p className={ClimbsListCSS.resultsControlBtn} onClick={loadLastResults}>{'>>'}</p>
     </div>
    </div>
    :
    <p></p>
   }
  </div>
 )
}

export default ClimbsList