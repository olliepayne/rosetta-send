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