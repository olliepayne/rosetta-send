import { useState } from 'react'
import { Link } from 'react-router-dom'
import ClimbsListCSS from './ClimbsList.module.css'
import ClimbFinder from '../../components/ClimbFinder/ClimbFinder'

const SearchResults = (props) => {
 const { results } = props

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
  }

  setSearchResults(tempArr)
 }

 //#region Search Results Navigation
 const handleClimbSearch = async (form) => {
  const results = await climbsAPI.search(form)
  divideSearchResults(results)
 }

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
    <div>
     <SearchResults results={searchResults[page]} />
     <div className={ClimbsListCSS.resultsControlContainer}>
      <p className={ClimbsListCSS.resultsControlBtn} onClick={loadFirstResults}>{'<<'}</p>
      <p className={ClimbsListCSS.resultsControlBtn} onClick={loadPreviousResults}>{'<'}</p>
      <p className={ClimbsListCSS.resultsPageCount}>{page + 1}/{searchResults.length}</p>
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