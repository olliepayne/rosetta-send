const baseURL = '/api/climbs/'

export function create(form) {
 return (
  fetch(baseURL, {
   method: 'POST',
   headers: { 'content-type': 'application/json' },
   body: JSON.stringify(form)
  }, { mode: 'cors' })
   .then((res) => res.json())
 )
}

export function getOne(id) {
 return (
  fetch(baseURL + id, { mode: 'cors' })
   .then((res) => res.json())
 )
}

export function search(form) {
 return (
  fetch(baseURL + 'search', {
   method: 'POST',
   headers: { 'content-type': 'application/json' },
   body: JSON.stringify(form)
  }, { mode: 'cors' })
   .then((res) => res.json())
 )
}

// update function

// delete function