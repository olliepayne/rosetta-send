const baseURL = '/api/users/'

export function addSubmittedClimb(id, climb) {
 fetch(baseURL + id + '/addSubmittedClimb', {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(climb)
 }, { mode: 'cors' })
}

export function getSubmittedClimbs(id) {
 return (
  fetch(baseURL + id + '/getSubmittedClimbs', { mode: 'cors' })
   .then((res) => res.json())
 )
}